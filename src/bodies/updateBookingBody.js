import * as variable from "../utils/variables"
import * as preRequest from "./preRequest"

export const updateBookingBody = {
    firstname : variable.userFirstName,
    lastname : variable.userLastName,
    totalprice :  preRequest.price2,
    depositpaid : false,
    bookingdates :
        {
            checkin : preRequest.checkin,
            checkout : preRequest.checkout2
        },
    additionalneeds : variable.additionalNeeds
}
