import {bookingEndpoint} from "../utils/variables";
import axios from "axios";

export function getAllBookingIds(){
    return axios.get(`${bookingEndpoint}/booking`);
}
