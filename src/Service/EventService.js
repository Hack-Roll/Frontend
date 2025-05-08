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

  getAllEvents() {
    const url = `${this.baseUrl}/event`;
    return axios.get(url).then((response) => response.data);
  }

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

  updateEvent(eventId, eventData) {
    const url = `${this.baseUrl}/user/event/${eventId}`;
    return axios
      .put(url, eventData, this.getRequestOptions())
      .then((response) => response.data);
  }

  deleteEvent(eventId) {
    const url = `${this.baseUrl}/user/event/${eventId}`;
    return axios.delete(url, this.getRequestOptions())
      .then((response) => response.data);
  }

  
}
