import { useState } from "react";
import ExpenseFilter from "./components/expense-filter/ExpenseFilter";
import ExpenseForm from "./components/expense-form/ExpenseForm";
import ExpenseList from "./components/expense-list/ExpenseList";
import { INITIAL_EXPENSES } from "./utils/typography";
import { CATEGORIES } from "./utils/typography";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: Date.now() }])
          }
        />
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
