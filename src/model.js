import { categoryInput } from "./querySelectors";

const categories = [];
// const completedTasks = [];

export default function newCategoryArray() {
  categories.push(categoryInput.value);
  console.log(categories);
}
