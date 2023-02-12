import {bookingEndpoint} from "../utils/variables";
import { bookingId } from "../test/booking.test";

import axios from "axios";

export function updateBooking(body, headers){
    return axios.put(`${bookingEndpoint}/booking/${bookingId}`, body, headers);
}