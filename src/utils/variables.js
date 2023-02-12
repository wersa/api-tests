import { token } from "../test/booking.test";

export const bookingEndpoint = "https://restful-booker.herokuapp.com";

export const login = "admin";
export const password = "password123";

export const userFirstName = "Irina";
export const userLastName = "Svidunovich";
export const additionalNeeds = "tea";
export const additionalNeeds2 = "WiFi";

export const content = {
  headers: { 
    "Content-Type": "application/json", 
    Accept: "application/json" },
};

export const contentChangeBooking = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: `token=${token}`,
    },
  };
};
