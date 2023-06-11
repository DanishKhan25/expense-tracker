import { useState } from "react";
import ExpenseFilter from "./components/expense-filter/ExpenseFilter";
import ExpenseForm from "./components/expense-form/ExpenseForm";
import ExpenseList from "./components/expense-list/ExpenseList";

export const CATEGORIES = ["Groceries", "Utilities", "Entertainment"];
export const INITIAL_EXPENSES = [
  { id: 1, description: "Milk", amount: 10, category: "Groceries" },
  { id: 2, description: "Orange", amount: 20, category: "Utilities" },
  { id: 3, description: "Milk", amount: 10, category: "Groceries" },
  { id: 4, description: "Milk", amount: 10, category: "Utilities" },
  { id: 5, description: "Milk", amount: 10, category: "Entertainment" },
];
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
