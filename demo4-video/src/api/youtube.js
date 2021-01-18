import axios from "axios";

const KEY = "AIzaSyD7_kgzbBRtxX_Tn0F-RXOLfkBLYb7A10I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 6,
    key: KEY,
  },
});
