import axios from "axios";

export class EventService {
  baseUrl = "http://localhost:8080/api";

  // TODO: Get real token based on user login
  token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXRAa2FhYWF0LmNvbSIsImlhdCI6MTc0NjQ1MTQ3OCwiZXhwIjoxNzQ2NTM3ODc4fQ.KxHJTDQqMrHciTb0zwHjRvYAJX2tt7PF52M8jtjI3AuKwjHcfEa44oFlMD2Fj7i5LC9Iup1jAZs81F0LNOxfHg";

  getAllEvents() {
    // GET http://localhost:8080/api/event
    const url = `${this.baseUrl}/event`;
    return axios.get(url).then((response) => response.data);
  }

  createEvent(event) {
    // POST http://localhost:8080/api/user/event
    const url = `${this.baseUrl}/user/event`;
    return axios
      .post(url, event, this.getRequestOptions())
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
