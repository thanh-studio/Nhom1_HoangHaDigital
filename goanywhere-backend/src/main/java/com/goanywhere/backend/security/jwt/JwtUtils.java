package com.goanywhere.backend.security.jwt;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

/** Tiện ích tạo, đọc và xác thực JWT dùng chung cho ứng dụng. */
@Component
public class JwtUtils {

    private final SecretKey signingKey;
    private final long expirationMs;

    public JwtUtils(
            @Value("${jwt.secret}") String base64Secret,
            @Value("${jwt.expiration-ms:86400000}") long expirationMs) {
        if (expirationMs <= 0) {
            throw new IllegalArgumentException("jwt.expiration-ms must be greater than zero");
        }
        // Khóa được cung cấp từ cấu hình môi trường, ở dạng Base64 (tối thiểu 256 bit với HS256).
        this.signingKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(base64Secret));
        this.expirationMs = expirationMs;
    }

    /** Tạo JWT cho tên người dùng; thời hạn lấy từ jwt.expiration-ms. */
    public String generateToken(String username) {
        if (username == null || username.isBlank()) {
            throw new IllegalArgumentException("username must not be blank");
        }

        Date now = new Date();
        Date expiration = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .subject(username)
                .issuedAt(now)
                .expiration(expiration)
                .signWith(signingKey)
                .compact();
    }

    /** Giải mã token và trả về subject sau khi chữ ký đã được xác minh. */
    public String getUsernameFromToken(String token) {
        return parseClaims(token).getSubject();
    }

    /** Kiểm tra chữ ký, định dạng và thời hạn của token. */
    public boolean validateToken(String token) {
        try {
            String subject = parseClaims(token).getSubject();
            return subject != null && !subject.isBlank();
        } catch (JwtException | IllegalArgumentException exception) {
            return false;
        }
    }

    private Claims parseClaims(String token) {
        return Jwts.parser()
                .verifyWith(signingKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
