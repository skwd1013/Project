// ExpenseItem.js

import React, { Component } from "react";
import "./ExpenseItem.css";

export class ExpenseItem extends Component {
  state = { isEditing: false };

  handleEditClick = () => {
    this.setState({
      isEditing: true,
      charge: this.props.expense.charge,
      amount: this.props.expense.amount,
    });
  };

  handleCancelClick = () => {
    this.setState({ isEditing: false });
  };

  handleUpdateClick = () => {
    this.props.onUpdate({
      id: this.props.expense.id,
      charge: this.state.charge,
      amount: this.state.amount,
    });
    this.setState({ isEditing: false });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { expense } = this.props;
    const { isEditing, charge, amount } = this.state;
    //   return (
    //     <li className="item">
    //       {isEditing ? (
    //         <div>
    //           <input
    //             type="text"
    //             name="charge"
    //             value={charge !== undefined ? charge : expense.charge}
    //             onChange={this.handleInputChange}
    //           />
    //           <input
    //             type="number"
    //             name="amount"
    //             value={amount !== undefined ? amount : expense.amount}
    //             onChange={this.handleInputChange}
    //           />
    //           <button onClick={this.handleUpdateClick}>완료</button>
    //           <button onClick={this.handleCancelClick}>취소</button>
    //         </div>
    //       ) : (
    //         <div className="info">
    //           <span className="expense">{expense.charge}</span>
    //           <span className="amount">{expense.amount} 원</span>
    //           <button className="edit-btn" onClick={this.handleEditClick}>
    //             수정
    //           </button>
    //           <button
    //             className="clear-btn"
    //             onClick={() => this.props.onDelete(expense.id)}
    //           >
    //             삭제
    //           </button>
    //         </div>
    //       )}
    //     </li>
    //   );
    // }
    return (
      <li className="item">
        {isEditing ? (
          <div className="editing-container">
            <input
              type="text"
              name="charge"
              value={charge !== undefined ? charge : expense.charge}
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              name="amount"
              value={amount !== undefined ? amount : expense.amount}
              onChange={this.handleInputChange}
            />
            <div className="editing-controls">
              <button onClick={this.handleUpdateClick}>완료</button>
              <button onClick={this.handleCancelClick}>취소</button>
            </div>
          </div>
        ) : (
          <div className="info">
            <span className="expense">{expense.charge}</span>
            <span className="amount">{expense.amount} 원</span>
          </div>
        )}
        {!isEditing && (
          <div>
            <button className="edit-btn" onClick={this.handleEditClick}>
              수정
            </button>
            <button
              className="clear-btn"
              onClick={() => this.props.onDelete(expense.id)}
            >
              삭제
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default ExpenseItem;
