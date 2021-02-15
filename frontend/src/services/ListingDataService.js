import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

class ListingDataService {
  create(data) {
    return axios.post("/listings", data);
  }

  retrieve() {
    return axios.get("/listings");
  }

  retrieveAvailable() {
    return axios.get("/listings/available");
  }

  retrieveById(id) {
    return axios.get(`/listings/${id}`);
  }

  update(id, data) {
    return axios.put(`/listings/${id}`, data);
  }

  delete(id) {
    return axios.delete(`listings/${id}`);
  }
}

export default new ListingDataService();
