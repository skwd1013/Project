// ExpenseList.js

import React, { Component } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.js";

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list">
          {this.props.initialExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              onUpdate={this.props.onUpdate}
            />
          ))}
        </ul>
        {/* 목록 지우기 버튼에 대한 기능은 구현이 필요합니다 */}
        <button className="btn" onClick={this.props.onClear}>
          목록지우기
        </button>
      </React.Fragment>
    );
  }
}

export default ExpenseList;
