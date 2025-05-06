import axios from "axios";

export class EventService {
  baseUrl = "http://localhost:8080/api";

  // TODO: Get real token based on user login
  token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYW9AcGFvb28uY29tIiwiaWF0IjoxNzQ2NTI0MDYwLCJleHAiOjE3NDY2MTA0NjB9.pM-4iZqrhivSVWJ5gkqUhAnUvhKZa7NtVVxl-Y8sDDvD0TDcAp8JTmX-iVdrgy2ukWjpjsqJjCKuPTfrV9_0rA";

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
