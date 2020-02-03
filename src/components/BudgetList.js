import React from "react";
import "./BudgetList.scss";
import BudgetListItem from "./BudgetListItem";

const BudgetList = ({ spendings, x, y, z, onRemove }) => {
  return (
    <div className="cost_container">
      <div className="cost_box">
        <div className="eat_cost">
          <h2>식비</h2>
          <div className="detail">
            {spendings.map(spending =>
              spending.selected === "eat" ? (
                <BudgetListItem
                  spending={spending}
                  key={spending.id}
                  onRemove={onRemove}
                />
              ) : (
                ""
              )
            )}
          </div>
          <h2 className="total">
            식비 총합 : <span className="total_cost"> {y}원</span>
          </h2>
        </div>
        <div className="live_cost">
          <h2>주거비</h2>
          <div className="detail">
            {spendings.map(spending =>
              spending.selected === "live" ? (
                <BudgetListItem
                  spending={spending}
                  key={spending.id}
                  onRemove={onRemove}
                />
              ) : (
                ""
              )
            )}
          </div>
          <h2 className="total">
            주거비 총합 :<span className="total_cost">{z}원</span>
          </h2>
        </div>
        <h2 className="total">
          총합 : <span className="total_total_cost"> {x}원</span>
        </h2>
      </div>
    </div>
  );
};

export default BudgetList;
