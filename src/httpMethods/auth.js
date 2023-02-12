import {bookingEndpoint} from "../utils/variables";
import axios from "axios";

export function auth(body, headers){
    return axios.post(`${bookingEndpoint}/auth`, body, headers)
}
