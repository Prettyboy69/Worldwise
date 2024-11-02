import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../Contexts/ContextCities";
import { Handler } from "leaflet";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();
  // console.log(city);
  const { cityName, emoji, date, id, position } = city;
  const HandlerClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };
  console.log(position);
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng} `}
      >
        <span className={styles.emoji}>{emoji}</span>

        <h3 className={styles.name}>{cityName}</h3>

        <time className={styles.date}>({formatDate(date)})</time>

        <button className={styles.deleteBtn} onClick={HandlerClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;