import React, { useState } from "react";
import Tariffcard from "./components/Tariffcard";
import tariffs from "./tariffData";

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariffsname) => {
    setSelectedTariff(tariffsname);
  };

  return (
    <div className="App">
      {tariffs.map((tariff) => (
        <Tariffcard
          key={tariff.id}
          tariffsname={tariff.tariffsname}
          price={tariff.price}
          speed={tariff.speed}
          traffic={tariff.traffic}
          isSelected={tariff.tariffsname === selectedTariff}
          onSelectTariff={handleTariffSelect}
        />
      ))}
    </div>
  );
}

export default App;
