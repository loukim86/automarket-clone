import { Link } from "react-router-dom";
import { useFavorites } from "../../pages/context/FavoriteContext";
import { IoIosArrowForward } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import { IoIosHeart } from "react-icons/io";
import { getCarBrandAndModel } from "../../carUtils/carUtils";
import "../../styles/catalog-card.css";

const CatalogCard = ({ car }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.includes(car.pk_car_id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(car.pk_car_id);
    } else {
      addFavorite(car.pk_car_id);
    }
  };

  const carBrandAndModel = getCarBrandAndModel(car.title_ru);

  return (
    <div className="catalog-card" onClick={(e) => e.stopPropagation()}>
      <Link to={`/catalog/${car.pk_car_id}`}>
        <img src={car.images[0]} alt={car.title_ru} style={{ width: "100%" }} />

        {isFavorite ? (
          <IoIosHeart className="full-heart" onClick={handleFavoriteClick} />
        ) : (
          <SlHeart
            className="catalog-icon-heart"
            onClick={handleFavoriteClick}
          />
        )}

        <h3 className="catalog-brand">{carBrandAndModel}</h3>
        <p className="catalog-info">Year: {car.production_year}</p>
        <p className="catalog-info">Mileage: {car.distance}km</p>
        <p className="catalog-info">Fuel: {car.fuel_type_ru}</p>
        <div className="catalog-bottom">
          <p className="catalog-price">{car.price}$</p>
          <button className="catalog-button">
            read more <IoIosArrowForward className="catalog-icon" />{" "}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CatalogCard;