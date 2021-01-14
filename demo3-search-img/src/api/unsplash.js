import axios from "axios";

const accessKey = "DY9YgwfXGK_Q8s5smcZdICIRvvcW0tsqn6bZIAMqqTM";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});
