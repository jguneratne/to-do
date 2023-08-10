import { format, parseISO } from "date-fns";

import { toDoItems } from "./model";

export default function formatDateTimes() {
  for (let i = 0; i < toDoItems.length; i++) {
    // console.log(toDoItems[i].dueDate);
    const formatted = format(parseISO(toDoItems[i].dueDate, 0), "PPp");
    console.log(formatted);

    toDoItems[i].dueDate = formatted;
    console.log(toDoItems);
  }
}
