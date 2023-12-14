// App.js

import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";

export class App extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses !== this.state.expenses) {
      localStorage.setItem("expenses", JSON.stringify(this.state.expenses));
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      expenses: JSON.parse(localStorage.getItem("expenses")) || [],
      editingExpense: null,
    };
  }

  componentDidMount() {
    const loadedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (loadedExpenses) {
      this.setState({ expenses: loadedExpenses });
    }
  }
  handleExpenseAdd = (newExpense) => {
    this.setState((prevState) => ({
      expenses: [...prevState.expenses, newExpense],
    }));
  };

  handleExpenseDelete = (id) => {
    const updatedExpenses = this.state.expenses.filter(
      (expense) => expense.id !== id
    );
    this.setState({ expenses: updatedExpenses });
  };

  handleExpenseEdit = (id) => {
    const editingExpense = this.state.expenses.find(
      (expense) => expense.id === id
    );
    this.setState({ editingExpense });
  };

  handleExpenseUpdate = (updatedExpense) => {
    const updatedExpenses = this.state.expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    this.setState({ expenses: updatedExpenses, editingExpense: null });
  };

  handleClearExpenses = () => {
    this.setState({ expenses: [] });
  };

  render() {
    return (
      <main
        className="main-container"
        style={{ width: "auto", marginRight: "60px", marginLeft: "30px" }}
      >
        <h1>예산 계산기</h1>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm
            onExpenseAdd={this.handleExpenseAdd}
            editingExpense={this.state.editingExpense}
          />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseList
            initialExpenses={this.state.expenses}
            onDelete={this.handleExpenseDelete}
            onEdit={this.handleExpenseEdit}
            onUpdate={this.handleExpenseUpdate}
            onClear={this.handleClearExpenses}
          />
        </div>
        {/* 총지출 계산 부분은 구현이 필요합니다 */}
        {/* <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
        >
          <p style={{ fontSize: "2rem" }}>
            총지출: <span>원</span>
          </p>
        </div> */}
        <Total expenses={this.state.expenses} />
      </main>
    );
  }
}

export default App;
