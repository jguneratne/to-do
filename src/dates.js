import { format, parseISO } from "date-fns";
import { dateTimePicker } from "./querySelectors";

export function formatDateTimes() {
  const dueDateDisplay = document.querySelectorAll(".show-due-date");

  dueDateDisplay.forEach((date) => {
    // console.log(date.textContent);
    const formatted = format(parseISO(date.textContent, 0), "PPp");
    date.textContent = formatted;
  });
}

export function limitDatePicker() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  let minDate = year + "-" + month + "-" + day + "T" + hour + ":" + minute;
  console.log(minDate);

  dateTimePicker.setAttribute("min", minDate);
}
