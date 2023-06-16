
import './Tariffcard.scss';

function Tariffs(props) {
const { tariffsname, price, speed, traffic } = props;
const formatPrice = (price) => {
const [rub, amount, month] = price.split(' ');

    return (
      <>
        <span className="sub">{rub}</span> <sub>{amount}</sub>
        <span className="sub1">{month}</span>
      </>
    );
  };

  return (
    <div className="tariff-card">
      <div className="tariffsname">
        <h2>{tariffsname}</h2>
      </div>
      <div className="price">{formatPrice(price)}</div>
      <div className="speed">{speed}</div>
      <div className="traffic">{traffic}</div>
    </div>
  );
}

export default Tariffs;
