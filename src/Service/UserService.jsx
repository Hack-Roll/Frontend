import axios from "axios";
 
 export class UserService {
   baseUrl = "http://localhost:8080/api";
 
   // TODO: Get real token based on user login
   getToken() {
    return localStorage.getItem("token");
  }
//   token =
//     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYW9AcGFvb28uY29tIiwiaWF0IjoxNzQ2NTI0MDYwLCJleHAiOjE3NDY2MTA0NjB9.pM-4iZqrhivSVWJ5gkqUhAnUvhKZa7NtVVxl-Y8sDDvD0TDcAp8JTmX-iVdrgy2ukWjpjsqJjCKuPTfrV9_0rA";

getRequestOptions() {
  const token = this.getToken();
  return {
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  };
}
     getAllUsers() {
        // Solo permitido por usuario "admin@admin.com"
        // GET http://localhost:8080/api/auth/users
        const url = `${this.baseUrl}/auth/users`;
        return axios.get(url, this.getRequestOptions()).then((res) => res.data);
      }
    
      createUser(user) {
       // POST http://localhost:8080/api/auth/signup
        const url = `${this.baseUrl}/auth/signup`;
        return axios
        //CHECK NEXT LINE
          .post(url, user, this.getRequestOptions())
          .then((response) => response.data);
      }

      login(data) {
        // POST http://localhost:8080/api/auth/signin
        return axios
          .post("http://localhost:8080/api/auth/signin",
            {
              email: data.email,
              password: data.password
            }, 
            {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);
      }
    }
    

