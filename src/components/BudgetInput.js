import React, { useState } from "react";
import { Select } from "antd";
import "./BudgetInput.scss";

const { Option } = Select;

const BudgetInput = ({
  onInsert,
  value_list,
  value_cost,
  onChange_list,
  onChange_cost,
  selected,
  handleChange
}) => {
  const onSubmit = e => {
    if (value_list && value_cost) {
      onInsert(value_list, value_cost);
      e.preventDefault();
    } else {
      alert("값을 모두 입력해주세요.");
    }
  };

  return (
    <div className="budgetInput">
      <form className="budgetForm" onSubmit={onSubmit}>
        <div className="select_container">
          <div className="spent_classify">
            <div>소비분류</div>
            <Select
              // defaultValue="식비"
              style={{ width: 120 }}
              onChange={handleChange}
              id="select"
              value={selected}
            >
              <Option value="eat">식비</Option>
              <Option value="live">주거비</Option>
            </Select>
          </div>
          <div className="input_cost1">
            <div>소비 내역</div>
            <input
              placeholder="입력하세요"
              id="spending_list"
              value={value_list}
              onChange={onChange_list}
              autoComplete="off"
            />
          </div>
          <div className="input_cost2">
            <div>금액</div>
            <input
              placeholder="입력하세요"
              id="spending_cost"
              value={value_cost}
              onChange={onChange_cost}
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <button className="submit_btn" type="submit">
            [+]
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetInput;
