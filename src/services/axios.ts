import axios from "axios";

export const api = axios.create({
  baseURL: "https://pp-api-desafio.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
