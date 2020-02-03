import React from "react";
import "./BudgetListItem.scss";
import { MdHighlightOff, MdEdit } from "react-icons/md";

const BudgetListItem = ({ spending, onRemove }) => {
  const { id, text, cost } = spending;
  return (
    <div className="detail_list">
      <div className="contents">
        <div className="text">{text}</div>
        <div className="cost">{cost} 원</div>
      </div>
      <div className="edit">
        <MdEdit />
      </div>
      <div className="delete" onClick={() => onRemove(id)}>
        <MdHighlightOff />
      </div>
    </div>
  );
};

export default BudgetListItem;
