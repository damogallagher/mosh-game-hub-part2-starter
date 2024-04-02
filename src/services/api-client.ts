import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "554a517b8f294a5d9f85713195e71a67",
  },
});
