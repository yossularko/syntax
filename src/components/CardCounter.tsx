import React from "react";

interface Props {
  value: string;
  label: string;
}

const CardCounter = ({ value, label }: Props) => {
  return (
    <div>
      <h1 className="uppercase text-7xl font-bold tracking-wider">{value}</h1>
      <p className="text-gray-700 text-sm font-light">{label}</p>
    </div>
  );
};

export default CardCounter;
