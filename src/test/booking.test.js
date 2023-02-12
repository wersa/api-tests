import { authBody } from "../bodies/authBody";
import { createBookingBody } from "../bodies/createBookingBody";
import { updateBookingBody } from "../bodies/updateBookingBody";
import { updatePartBody } from "../bodies/updatePartBody";

import { auth } from "../httpMethods/auth";
import { getAllBookingIds } from "../httpMethods/getAllBookingIds";
import { createBooking } from "../httpMethods/createBooking";
import { getBookingInfo } from "../httpMethods/getBookinginfo";
import { updateBooking } from "../httpMethods/updateBooking";
import { updatePartOfBooking } from "../httpMethods/updatePartOfBooking";
import { deleteBooking } from "../httpMethods/deleteBooking";
import { getDeletedBooking } from "../httpMethods/getDeletedBooking";

import * as variable from "../utils/variables";
import * as requestData from "../bodies/preRequest";

export let token;
export let bookingId;

describe("auth with login and password", () => {
  let authResponse;

  beforeAll(async () => {
    authResponse = await auth(authBody, variable.content);
    console.log("authResponse is:", authResponse.data);
  });

  afterAll(() => {
    token = authResponse.data.token;
    console.log("response token is:", token);
  });

  test("status code is 200", () => {
    expect(authResponse.status).toEqual(200);
  });

  test("status text is OK", () => {
    expect(authResponse.statusText).toEqual("OK");
  });
});

describe("get all booking Ids", () => {
  let response;

  beforeAll(async () => {
    response = await getAllBookingIds();
    console.log("get bookings response (first id):", response.data[0]);
  });

  test("status code is 200", () => {
    expect(response.status).toEqual(200);
  });

  test("status text is OK", () => {
    expect(response.statusText).toEqual("OK");
  });
});

describe("create a booking", () => {
  let bookingResponse;

  beforeAll(async () => {
    bookingResponse = await createBooking(createBookingBody, variable.content);
    console.log("bookingResponse is:", bookingResponse.data);
  });

  afterAll(() => {
    bookingId = bookingResponse.data.bookingid;
    console.log("response bookingid is:", bookingId);
  });

  test("status code is 200", () => {
    expect(bookingResponse.status).toEqual(200);
  });

  test("status text is OK", () => {
    expect(bookingResponse.statusText).toEqual("OK");
  });

  test("checkin date is equal generated value", () => {
    expect(bookingResponse.data.booking.bookingdates.checkin).toEqual(
      requestData.checkin
    );
  });

  test("checkout date is equal generated value", () => {
    expect(bookingResponse.data.booking.bookingdates.checkout).toEqual(
      requestData.checkout
    );
  });

  test("price in response is equal generated value", () => {
    expect(bookingResponse.data.booking.totalprice).toEqual(requestData.price);
  });
});

describe("get info about user booking via id", () => {
  let bookingResponse;

  beforeAll(async () => {
    bookingResponse = await getBookingInfo(variable.content);
    console.log("booking info response:", bookingResponse.data);
  });

  test("status code is 200", () => {
    expect(bookingResponse.status).toEqual(200);
  });

  test("status text is OK", () => {
    expect(bookingResponse.statusText).toEqual("OK");
  });

  test("firstname in response is equal expected value", () => {
    expect(bookingResponse.data.firstname).toEqual(variable.userFirstName);
  });

  test("lastname in response is equal expected value", () => {
    expect(bookingResponse.data.lastname).toEqual(variable.userLastName);
  });

  test("checkin date is equal generated value", () => {
    expect(bookingResponse.data.bookingdates.checkin).toEqual(
      requestData.checkin
    );
  });

  test("checkout date is equal generated value", () => {
    expect(bookingResponse.data.bookingdates.checkout).toEqual(
      requestData.checkout
    );
  });

  test("price in response is equal generated value", () => {
    expect(bookingResponse.data.totalprice).toEqual(requestData.price);
  });

  test("depositpaid in response is equal expected value", () => {
    expect(bookingResponse.data.depositpaid).toEqual(false);
  });

  test("additionalneeds in response is equal expected value", () => {
    expect(bookingResponse.data.additionalneeds).toEqual(
      variable.additionalNeeds
    );
  });
});

describe("update a booking via put", () => {
  let bookingResponse;

  beforeAll(async () => {
    bookingResponse = await updateBooking(
      updateBookingBody,
      variable.contentChangeBooking()
    );
    console.log("update via put response is:", bookingResponse.data);
  });

  test("status code is 200", () => {
    expect(bookingResponse.status).toEqual(200);
  });

  test("status text is OK", () => {
    expect(bookingResponse.statusText).toEqual("OK");
  });

  test("checkout date is equal generated value", () => {
    expect(bookingResponse.data.bookingdates.checkout).toEqual(
      requestData.checkout2
    );
  });

  test("price in response is equal generated value", () => {
    expect(bookingResponse.data.totalprice).toEqual(requestData.price2);
  });
});

describe("update the part of booking via patch", () => {
  let bookingResponse;

  beforeAll(async () => {
    bookingResponse = await updatePartOfBooking(
      updatePartBody,
      variable.contentChangeBooking()
    );
    console.log("update via patch response is:", bookingResponse.data);
  });

  test("status code is 200", () => {
    expect(bookingResponse.status).toEqual(200);
  });

  test("status text is OK", () => {
    expect(bookingResponse.statusText).toEqual("OK");
  });

  test("depositpaid in response is equal expected value", () => {
    expect(bookingResponse.data.depositpaid).toEqual(true);
  });

  test("additionalneeds in response is equal expected value", () => {
    expect(bookingResponse.data.additionalneeds).toEqual(
      variable.additionalNeeds2
    );
  });
});

describe("delete user booking", () => {
  let bookingResponse;

  beforeAll(async () => {
    bookingResponse = await deleteBooking(variable.contentChangeBooking());
    console.log("delete response is:", bookingResponse.data);
  });

  test("status code is 201", () => {
    expect(bookingResponse.status).toEqual(201);
  });

  test("status text is Created", () => {
    expect(bookingResponse.statusText).toEqual("Created");
  });
});

describe("try to get info about deleted booking", () => {
  let bookingResponse;

  beforeAll(async () => {
    try {
      bookingResponse = await getDeletedBooking(variable.content);
    } catch (error) {
      bookingResponse = error.response;
      console.log("try to get info response:", bookingResponse.data);
    }
  });

  test("status code is 404", () => {
    expect(bookingResponse.status).toEqual(404);
  });

  test("status text is Not Found", () => {
    expect(bookingResponse.statusText).toEqual("Not Found");
  });
});
