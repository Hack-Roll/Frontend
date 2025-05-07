import axios from "axios";

export class UserService {
  baseUrl = "http://localhost:8080/api";

  getToken() {
    return localStorage.getItem("token")
  }

  getRequestOptions() {
    const token = this.getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  getAllUsers() {
    // Solo permitido por usuario "admin@admin.com"
    // GET http://localhost:8080/api/auth/users
    const url = `${this.baseUrl}/auth/users`;
    return axios.get(url, this.getRequestOptions()).then((response) => response.data);
  }

  createUser(user) {
    // POST http://localhost:8080/api/auth/signup
    const url = `${this.baseUrl}/auth/signup`;
    return axios
      .post(url, user, this.getRequestOptions())
      .then((response) => response.data);
  }

  login(data) {
    // POST http://localhost:8080/api/auth/signin
    return axios
      .post(
        `${this.baseUrl}/auth/signin`,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => response.data);
  }
}
