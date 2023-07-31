import { categoryInput } from "./querySelectors";

export const categories = [];
// const completedTasks = [];

export function newCategoryArray() {
  categories.push(categoryInput.value);
  console.log(categories);
}
