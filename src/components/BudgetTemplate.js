import React, { useState } from "react";
import "./BudgetTemplate.scss";

const BudgetTemplate = ({ children, value, setValue, onChange, x }) => {
  // const isNumber = text => /^[0-9]+$/.test(text);

  const [goal, setGoal] = useState(0);

  const onInsert = () => {
    setGoal(value);
    setValue("");
  };

  return (
    <div className="budgetTemplate">
      <div className="title">Budget Calculator</div>
      <div className="sub">
        <div className="sub_title 1">목표 예산</div>
        <input type="text" id="cost1" value={value} onChange={onChange} />
        <button onClick={onInsert}>입력</button>
        <span className="goal">{goal} 원</span>
      </div>
      <div className="children">{children}</div>
      <div className="sub">
        <div className="sub_title 2">남은 예산</div>
        <input
          type="text"
          name="cost2"
          value={goal ? goal - x : ""}
          onChange={onChange}
          readOnly={true}
        />
        <span className="sentence">
          {goal ? (goal - x >= 0 ? "GOOD JOB!" : "TRY AGAIN..!") : ""}
        </span>
      </div>
    </div>
  );
};

export default BudgetTemplate;
