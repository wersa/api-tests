import {bookingEndpoint} from "../utils/variables";
import { bookingId } from "../test/booking.test";

import axios from "axios";

export function deleteBooking(headers){
    return axios.delete(`${bookingEndpoint}/booking/${bookingId}`, headers);
}