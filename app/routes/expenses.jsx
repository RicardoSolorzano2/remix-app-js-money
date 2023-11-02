import { Link, Outlet } from "@remix-run/react";
import ExpensesList from "../components/expenses/ExpensesList";
import expensesStyle from "../styles/expenses.css";
import ExpensesHeader from "../components/navigation/ExpensesHeader";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "first expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "second expense",
    amount: 16.99,
    date: new Date().toISOString(),
  },
];

export default function ExpensesLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            icon
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            icon
            <span>Load raw data</span>
          </a>
        </section>

        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyle }];
}
