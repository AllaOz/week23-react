import React from "react";
import "./Tariffcard.scss";

function Tariffcard(props) {
  const { tariffsname, price, speed, traffic, isSelected, onSelectTariff } = props;

  const handleTariffSelect = () => {
    onSelectTariff(tariffsname);
  };

  const formatPrice = (price) => {
    const [rub, amount, month] = price.split(" ");

    return (
      <>
        <sup><span className="sub">{rub}</span></sup> <sub>{amount}</sub>
        <sub><span className="sub1">{month}</span></sub>
      </>
    );
  };

  return (
    <div
      className={`tariff-card ${isSelected ? "selected" : ""}`}
      onClick={handleTariffSelect}>

      <div className="tariffsname">
        <h2>{tariffsname}</h2>
      </div>
      <div className="price">{formatPrice(price)}</div>
      <div className="speed">{speed}</div>
      <div className="traffic">{traffic}</div>
    </div>
  );
}

export default Tariffcard;