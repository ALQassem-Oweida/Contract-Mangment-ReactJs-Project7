import axios from "axios";

const KEY = "";
// AIzaSyBgWEQ_Fbc4NW36c_Re03wf9FSw_MH5P44
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 1,
    key: KEY,
  },
});
