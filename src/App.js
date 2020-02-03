import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import BudgetTemplate from "./components/BudgetTemplate";
import BudgetInput from "./components/BudgetInput";
import BudgetList from "./components/BudgetList";

const App = () => {
  const [selected, setSelected] = useState("eat");

  const handleChange = e => {
    setSelected(e);
  };

  const initialSpendings = [
    {
      id: 1,
      text: "달콤커피",
      cost: 4500,
      selected: "eat"
    },
    {
      id: 2,
      text: "스타벅스",
      cost: 5500,
      selected: "eat"
    },
    { id: 3, text: "월세", cost: 300000, selected: "live" },
    {
      id: 4,
      text: "관리비",
      cost: 15000,
      selected: "live"
    }
  ];

  const isNumber = text => /^[0-9]+$/.test(text);

  const [value_list, setValue_list] = useState("");
  const [value_cost, setValue_cost] = useState("");

  const onChange_list = e => {
    setValue_list(e.target.value);
  };

  const onChange_cost = e => {
    if (isNumber(e.target.value)) {
      setValue_cost(e.target.value);
    }
  };

  const [spendings, setSpendings] = useState(initialSpendings);

  const nextId = useRef(5);

  const onInsert = (value_list, value_cost) => {
    const spending = {
      id: nextId.current,
      text: value_list,
      cost: parseInt(value_cost),
      selected: selected
    };
    setSpendings(spendings.concat(spending));
    nextId.current += 1;
    setValue_list("");
    setValue_cost("");
  };

  const [value, setValue] = useState("");

  const onChange = e => {
    if (isNumber(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const onRemove = id => {
    setSpendings(spendings.filter(s => s.id !== id));
  };

  const x = [
    spendings.reduce((acc, cur) => {
      return (acc += cur.cost);
    }, 0)
  ];

  const y = useCallback(
    spendings
      .filter(spending => spending.selected === "eat")
      .reduce((acc, cur) => {
        return (acc += cur.cost);
      }, 0),
    [spendings]
  );

  const z = useCallback(
    spendings
      .filter(spending => spending.selected === "live")
      .reduce((acc, cur) => {
        return (acc += cur.cost);
      }, 0),
    [spendings]
  );

  // function numberFormat(inputNumber) {
  //   return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }
  // numberFormat(spendings.cost);

  return (
    <BudgetTemplate value={value} setValue={setValue} onChange={onChange} x={x}>
      <BudgetInput
        onInsert={onInsert}
        value_list={value_list}
        value_cost={value_cost}
        onChange_list={onChange_list}
        onChange_cost={onChange_cost}
        selected={selected}
        handleChange={handleChange}
      />
      <BudgetList spendings={spendings} x={x} y={y} z={z} onRemove={onRemove} />
    </BudgetTemplate>
  );
};

export default App;
