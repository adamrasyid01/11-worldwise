import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

export default function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return <Message message="Add your first city by clicking on a city on the map">No cities found</Message>;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

// ✅ Tambahkan ini di bawah
CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
