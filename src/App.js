import React, { useState } from "react";
import Select from "react-select";

import "./App.css";

const options = [
  { value: "Violet", label: "Violet", color: "violet" },
  { value: "Indigo", label: "Indigo", color: "indigo" },
  { value: "Blue", label: "Blue", color: "blue" },
  { value: "Green", label: "Green", color: "green" },
  { value: "Yellow", label: "Yellow", color: "yellow" },
  { value: "Orange", label: "Orange", color: "orange" },
  { value: "Red", label: "Red", color: "red" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: data.color,
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },

    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#fff",
    }),

    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "#fff",
      cursor: "pointer",
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <div className="app">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
        styles={colorStyles}
      />
    </div>
  );
}

export default App;
