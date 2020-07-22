import axios from "axios";
const getUsers = axios.get("https://commiters.now.sh/rank/uzbekistan");

export default { getUsers };
