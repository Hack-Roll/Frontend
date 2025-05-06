import axios from "axios";

export class EventService {
  baseUrl = "http://localhost:8080/api";

  // TODO: Get real token based on user login
  token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXRAa2FhYWF0LmNvbSIsImlhdCI6MTc0NjUyNjcyNywiZXhwIjoxNzQ2NjEzMTI3fQ.IBjnxpe5mnHW_zrMIjDiNtJMk_EUpuLH4PSvNIXsftJCwo5BQfsnjij0gmgriEhQMphKi8ACc9q_Gb19FQ9R6g";

  getAllEvents() {
    const url = `${this.baseUrl}/event`;
    return axios.get(url).then((response) => response.data);
  }

  // obtiene los detalles de un evento.
  getEventById(eventId) {
    // GET http://localhost:8080/api/event/{id}
    const url = `${this.baseUrl}/event/${eventId}`;
    return axios
      .get(url, this.getRequestOptions())
      .then((response) => response.data);
  }

  createEvent(event) {
    const url = `${this.baseUrl}/user/event`;
    return axios
      .post(url, event, this.getRequestOptions())
      .then((response) => response.data);
  }
  // actualiza un evento existente.
  updateEvent(eventId, eventData) {
    // PUT http://localhost:8080/api/user/event/{id}
    const url = `${this.baseUrl}/user/event/${eventId}`;
    return axios
      .put(url, eventData, this.getRequestOptions())
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
