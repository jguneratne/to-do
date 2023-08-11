import { format, parseISO, isAfter } from "date-fns";
import { dateTimePicker } from "./querySelectors";
import { toDoItems } from "./model";

export function formatDateTimes() {
  const dueDateDisplay = document.querySelectorAll(".show-due-date");

  dueDateDisplay.forEach((date) => {
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

  const minDate = year + "-" + month + "-" + day + "T" + hour + ":" + minute;
  console.log(minDate);

  dateTimePicker.setAttribute("min", minDate);

  return minDate;
}

export function findPastDue() {
  const currentDateTime = limitDatePicker();

  for (let i = 0; i < toDoItems.length; i++) {
    const taskDue = toDoItems[i].dueDate;

    const comparison = isAfter(
      parseISO(currentDateTime, 0),
      parseISO(taskDue, 0)
    );
    console.log(comparison);

    const dueDateDisplay = Array.from(
      document.querySelectorAll(".show-due-date")
    );

    dueDateDisplay.forEach((date, index) => {
      if (index === toDoItems.indexOf(toDoItems[i])) {
        if (comparison === true) {
          date.style.color = "#bc2702";
        }
      }
    });
  }
}
