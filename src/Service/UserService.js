import axios from "axios";
 
 export class UserService {
   baseUrl = "http://localhost:8080/api";
 
   // TODO: Get real token based on user login
   token =
     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYW9AcGFvb28uY29tIiwiaWF0IjoxNzQ2NTI0MDYwLCJleHAiOjE3NDY2MTA0NjB9.pM-4iZqrhivSVWJ5gkqUhAnUvhKZa7NtVVxl-Y8sDDvD0TDcAp8JTmX-iVdrgy2ukWjpjsqJjCKuPTfrV9_0rA";

     getAllUsers() {
        // Solo permitido por usuario "admin@admin.com"
        // GET http://localhost:8080/api/auth/users
        const url = `${this.baseUrl}/auth/users`;
        return axios.get(url).then((response) => response.data);
      }
    
      createUser(user) {
       // POST http://localhost:8080/api/auth/signup
        const url = `${this.baseUrl}/auth/signup`;
        return axios
          .post(url, user, this.getRequestOptions())
          .then((response) => response.data);
      }
    
      getRequestOptions() {
        return {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
      }
}