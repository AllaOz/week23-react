import React from "react";

import Tariffcard from './components/Tariffcard';
import tariffs from "./tariffData";


class App extends React.Component {
    render () {
        return (
            <div className="App">
                {
                    tariffs.map((tariffs) =>
                    <Tariffcard
                    key={tariffs.id}
                    tariffsname={tariffs.tariffsname}
                    price={tariffs.price}
                    speed={tariffs.speed}
                    traffic={tariffs.traffic}
                  />  
                    )
                }
                </div>
        );
    }
  }
    
export default App;