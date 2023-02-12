import * as generation from "../utils/randomGenerator";

export const checkin = generation.generateCheckinDate();
export const checkout = generation.generateCheckoutDate(2, 4);
export const price = generation.randomValue(20, 100);

export const checkout2 = generation.generateCheckoutDate(5, 8);
export const price2 = generation.randomValue(100, 500);