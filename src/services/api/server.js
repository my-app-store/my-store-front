import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
  headers: {
    "Content-type": "application/json"
  }
});