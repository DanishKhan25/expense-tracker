// import { useForm, FieldValues } from "react-hook-form";
// import DropDown from "../common/drop-down/DropDown";
// import Input from "../common/input/Input";
// import { useState } from "react";
// import ExpenseList from "../expense-list/ExpenseList";
// import ExpenseFilter from "../expense-filter/ExpenseFilter";
// import { CATEGORIES, INITIAL_EXPENSES } from "../../utils/typography";
// interface FormData {
//   description: string;
//   amount: number;
//   category: string;
// }

// const ExpenseFormComponent = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

//   // const onSubmit = (data: FormData) => {
//   //   setExpenses([...expense, data]);
//   // };
//   const visibleExpenses = selectedCategory
//     ? expenses.filter((exp) => exp.category === selectedCategory)
//     : expenses;
//   return (
//     <div className="container">
//       <form
//       // onSubmit={handleSubmit(onSubmit)}
//       >
//         <div className="mb-3">
//           <Input
//             type="text"
//             id="description"
//             label="Description"
//             placeholder="please enter your expense"
//             onChange={register("description", { required: true, minLength: 3 })}
//           />
//           {errors.description?.type === "required" && (
//             <span className="text-danger">this is required</span>
//           )}
//           {errors.description?.type === "minLength" && (
//             <span className="text-danger">atlases 3 characters required</span>
//           )}
//         </div>
//         <div className="mb-3">
//           <Input
//             type="number"
//             id="amount"
//             label="Amount"
//             placeholder="please enter amount"
//             onChange={register("amount", { required: true })}
//           />
//           {errors.amount?.type === "required" && (
//             <span className="text-danger">this is required</span>
//           )}
//         </div>
//         <div className="mb-3">
//           <DropDown
//             name="category"
//             id="category"
//             list={CATEGORIES}
//             label="Category"
//             onChange={register("category", { required: true })}
//           />
//           {errors.category?.type === "required" && (
//             <span className="text-danger">this is required</span>
//           )}
//         </div>
//         <div className="mb-3">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// };

// export default ExpenseFormComponent;
