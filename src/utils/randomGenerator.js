import moment from "moment/moment";

export function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateCheckinDate() {
  return moment().format("YYYY-MM-DD");
}

export function generateCheckoutDate(min, max) {
  return moment().add(randomValue(min, max), "days").format("YYYY-MM-DD");
}
