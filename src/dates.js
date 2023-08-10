import { format, parseISO } from "date-fns";

export default function formatDateTimes() {
  const dueDateDisplay = document.querySelectorAll(".show-due-date");

  dueDateDisplay.forEach((date) => {
    // console.log(date.textContent);
    const formatted = format(parseISO(date.textContent, 0), "PPp");
    date.textContent = formatted;
  });
}
