# GoAnywhere Backend

Backend Spring Boot 4.1.1, Java 21 và Maven Wrapper.

## Cấu trúc

```text
goanywhere-backend/
├── .mvn/wrapper/
├── docs/
│   ├── architecture/
│   ├── database/
│   └── api/
├── src/
│   ├── main/
│   │   ├── java/com/goanywhere/backend/
│   │   │   ├── GoAnywhereBackendApplication.java
│   │   │   ├── shared/
│   │   │   │   ├── config/
│   │   │   │   ├── exception/
│   │   │   │   ├── response/
│   │   │   │   ├── validation/
│   │   │   │   └── util/
│   │   │   ├── security/
│   │   │   │   ├── config/
│   │   │   │   ├── jwt/
│   │   │   │   └── filter/
│   │   │   ├── modules/
│   │   │   │   ├── auth/
│   │   │   │   ├── user/
│   │   │   │   ├── driver/
│   │   │   │   ├── vehicle/
│   │   │   │   ├── booking/
│   │   │   │   ├── trip/
│   │   │   │   ├── dispatch/
│   │   │   │   ├── pricing/
│   │   │   │   ├── payment/
│   │   │   │   ├── refund/
│   │   │   │   ├── wallet/
│   │   │   │   ├── reward/
│   │   │   │   ├── feedback/
│   │   │   │   ├── notification/
│   │   │   │   ├── support/
│   │   │   │   ├── report/
│   │   │   │   ├── audit/
│   │   │   │   └── system/
│   │   │   └── integration/
│   │   │       ├── paymentgateway/
│   │   │       ├── maps/
│   │   │       └── messaging/
│   │   └── resources/
│   │       ├── db/migration/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-test.yml
│   │       └── application-prod.yml
│   └── test/java/com/goanywhere/backend/
│       ├── GoanywhereBackendApplicationTests.java
│       ├── modules/
│       └── integration/
├── .gitattributes
├── .gitignore
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
```

Các thư mục rỗng có `.gitkeep` để được lưu trong Git. Có thể xóa `.gitkeep` khi thêm mã nguồn vào thư mục đó.

## Cách tổ chức mã nguồn

- `shared/`: cấu hình, xử lý lỗi, response, validation và tiện ích dùng chung.
- `security/`: cấu hình bảo mật, JWT và filter.
- `modules/`: mã nguồn theo chức năng nghiệp vụ. Trong mỗi module, tạo `controller/`, `service/`, `repository/`, `entity/`, `dto/`, `mapper/` khi cần.
- `integration/`: kết nối dịch vụ thanh toán, bản đồ và nhắn tin bên ngoài.
- `docs/`: tài liệu kiến trúc, database và API.
- `src/main/resources/db/migration/`: nơi đặt migration SQL; hiện chưa có Flyway/Liquibase trong `pom.xml` nên các file ở đây chưa tự chạy.
- `src/test/.../modules/` và `integration/`: nơi đặt test nghiệp vụ và test tích hợp.

Hiện đây là khung thư mục; các module, JWT và API chưa được triển khai.

## Chạy trong VS Code

Mở thư mục gốc dự án và sử dụng terminal PowerShell. Máy cần JDK 21. Có thể dùng Extension Pack for Java và Spring Boot Extension Pack để chạy/debug ứng dụng.

Project đã có JPA và MySQL connector, vì vậy cần MySQL đang chạy và database đã được tạo. Trong terminal, đặt cấu hình bằng thông tin database của bạn:

```powershell
cd goanywhere-backend
$env:SPRING_PROFILES_ACTIVE = 'dev'
$env:SPRING_DATASOURCE_URL = 'jdbc:mysql://localhost:3306/goanywhere'
$env:SPRING_DATASOURCE_USERNAME = 'your_database_user'
$env:SPRING_DATASOURCE_PASSWORD = 'your_database_password'
.\mvnw.cmd spring-boot:run
```

Ứng dụng dùng cổng `8080` mặc định. Có thể thay đổi bằng biến môi trường `SERVER_PORT`.

Spring Security đang dùng cấu hình mặc định của dependency hiện có. Cần triển khai cấu hình trong `security/` trước khi frontend gọi các API theo cơ chế xác thực mong muốn.

## Build và test

```powershell
.\mvnw.cmd -DskipTests package
```

Lệnh trên build và biên dịch test nhưng bỏ qua chạy test. Test `contextLoads()` cần database để khởi tạo application context. Để chạy test, cấu hình các biến `SPRING_DATASOURCE_*` với database riêng dành cho test rồi chạy:

```powershell
$env:SPRING_PROFILES_ACTIVE = 'test'
.\mvnw.cmd test
```

Profile `prod` sử dụng `ddl-auto: validate`: schema phải được tạo trước khi chạy. Các file profile tuân theo [cấu hình Spring Boot](https://docs.spring.io/spring-boot/reference/features/external-config.html).
