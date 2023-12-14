import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3094b659836988588fb09003760f0982",
    language: "ko-Kr",
  },
});

export default instance;
