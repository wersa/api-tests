import {bookingEndpoint} from "../utils/variables";
import { bookingId } from "../test/booking.test";

import axios from "axios";

export function updatePartOfBooking(body, headers){
    return axios.patch(`${bookingEndpoint}/booking/${bookingId}`, body, headers);
}