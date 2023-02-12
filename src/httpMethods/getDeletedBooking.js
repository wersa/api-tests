import {bookingEndpoint} from "../utils/variables";
import { bookingId } from "../test/booking.test";
import axios from "axios";

export function getDeletedBooking(headers){
    return axios.get(`${bookingEndpoint}/booking/${bookingId}`, headers);
}
