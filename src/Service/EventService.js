import axios from "axios";

export class EventService {
  baseUrl = "http://localhost:8080/api";

  getToken() {
    return localStorage.getItem("token");
  }

  getRequestOptions() {
    const token = this.getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  // manualtoken =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXRAa2FhYWF0LmNvbSIsImlhdCI6MTc0NjU1NzUxMSwiZXhwIjoxNzQ2NjQzOTExfQ.b271Gx5gfVgidxYjFHz0yhpi_WfhlpLThtAzTkEQ_17NOpHjEvxjhcam6oQDwEvbX_Zh9AZ3S9_5se5cQ4Io0A";


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
}
