import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { fetchCarsByCategory } from "../carUtils/carUtils";
import CatalogCard from "../components/UI/CatalogCard";
import Footer from "../components/Footer/Footer";
import SearchFilter from "../components/UI/SearchFilter";
import MobileSearchFile from "../components/UI/MobileSearchFile";
import "../styles/catalog.css";

const Catalog = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredCars, setFilteredCars] = useState([]);
  const [category, setCategory] = useState("all");

  const carsPerPage = 12;

  useEffect(() => {
    const cars = fetchCarsByCategory(category);
    setFilteredCars(cars);
  }, [category]);

  const pagesVisited = pageNumber * carsPerPage;
  const displayCars = filteredCars
    .slice(pagesVisited, pagesVisited + carsPerPage)
    .map((car) => <CatalogCard key={car.id} car={car} />);

  const pageCount = Math.ceil(filteredCars.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setPageNumber(0);
  };

  return (
    <>
      <div className="container">
        <div className="search-filter-mobile">
          <MobileSearchFile isAbsolute={false} />
        </div>
        <div className="search-filter-wrapper">
          <SearchFilter isVisible={true} top="0" left="0" usePosition={false} />
        </div>
        <div className="catalog-category-links">
          <button
            onClick={() => handleCategoryChange("all")}
            className={category === "all" ? "active-btn" : ""}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("korean")}
            className={category === "korean" ? "active-btn" : ""}
          >
            Korean Auto
          </button>
          <button
            onClick={() => handleCategoryChange("european")}
            className={category === "european" ? "active-btn" : ""}
          >
            European Auto
          </button>
        </div>
        <div className="car-gallery">{displayCars}</div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={<IoIosArrowBack size={26} />}
            nextLabel={<IoIosArrowForward size={26} />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"previous-button"}
            pageLinkClassName={"page-item"}
            nextLinkClassName={"next-button"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
          />
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default Catalog;
