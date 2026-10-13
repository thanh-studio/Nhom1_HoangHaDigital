import axios, { AxiosHeaders } from "axios";

const TOKEN_STORAGE_KEY = "accessToken";

const axiosClient = axios.create({
  // Có thể đổi URL API theo môi trường qua VITE_API_BASE_URL trong file .env.
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Tự động gửi JWT cùng mỗi request khi trình duyệt đã lưu token đăng nhập.
axiosClient.interceptors.request.use((config) => {
  const token = typeof window !== "undefined"
    ? window.localStorage.getItem(TOKEN_STORAGE_KEY)
    : null;

  if (token) {
    config.headers = AxiosHeaders.from(config.headers);
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

// Token hết hạn/không còn hợp lệ: xóa token cũ và đưa người dùng về trang đăng nhập.
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const authorization = error.config?.headers
      ? AxiosHeaders.from(error.config.headers).get("Authorization")
      : null;
    const requestHadToken = typeof authorization === "string"
      && authorization.startsWith("Bearer ");

    if (typeof window !== "undefined" && error.response?.status === 401 && requestHadToken) {
      window.localStorage.removeItem(TOKEN_STORAGE_KEY);

      if (window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
    }

    return Promise.reject(error);
  },
);

export { TOKEN_STORAGE_KEY };
export default axiosClient;
