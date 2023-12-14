import React, { Component } from "react";
import "./ExpenseForm.css";

export class ExpenseForm extends Component {
  state = {
    charge: "",
    amount: "",
  };

  componentDidUpdate(prevProps) {
    // Update the form fields if editingExpense prop changes
    if (prevProps.editingExpense !== this.props.editingExpense) {
      this.setState({
        charge: this.props.editingExpense
          ? this.props.editingExpense.charge
          : "",
        amount: this.props.editingExpense
          ? this.props.editingExpense.amount
          : "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: this.props.editingExpense
        ? this.props.editingExpense.id
        : new Date().getTime(),
      charge: this.state.charge,
      amount: parseInt(this.state.amount),
    };

    this.props.onExpenseAdd(newExpense);

    this.setState({ charge: "", amount: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">지출항목</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              value={this.state.charge}
              onChange={this.handleChange}
              placeholder="예) 렌트비"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">비용</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              placeholder="예) 100"
            />
          </div>
        </div>
        <button type="submit" className="btn">
          {this.props.editingExpense ? "수정" : "제출"}
        </button>
      </form>
    );
  }
}

export default ExpenseForm;
