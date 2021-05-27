import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-apps.herokuapp.com/",
});

export default instance;