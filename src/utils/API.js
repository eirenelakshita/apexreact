import axios from "axios";

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi";
const APIKEY = "&appid=b0d00a3f19310077f04a39df76eef0ab";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};