import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";

import PartyMenuContext from "../../context/PartMenuContext";

import "./index.css";
import { useState } from "react";

const Filters = () => {
  const [searchValue, setSearchvalue] = useState("");
  const onSearchInputChange = (value) => {
    setSearchvalue(value);
  };
  return (
    <PartyMenuContext.Consumer>
      {(value) => {
        const {
          activeCategory,
          vegOnly,
          nonVegOnly,
          addedToCartList,
          onCategoryChange,
          onToggleDishType,
          onSearchChange,
        } = value;

        const onFormSubmit = (event) => {
          event.preventDefault();
          onSearchChange(searchValue);
        };

        const onBackButton = () => {
          onSearchInputChange("");
          onSearchChange("");
        };

        const startersAdded = addedToCartList.filter(
          (each) => each.mealType === "STARTER"
        ).length;
        const mainCourseAdded = addedToCartList.filter(
          (each) => each.mealType === "MAIN COURSE"
        ).length;
        const dessertsAdded = addedToCartList.filter(
          (each) => each.mealType === "DESSERT"
        ).length;
        const sidesAdded = addedToCartList.filter(
          (each) => each.mealType === "SIDES"
        ).length;

        const tabNames = {
          STARTER: `Starter ${startersAdded}`,
          "MAIN COURSE": `Main Course ${mainCourseAdded}`,
          DESSERT: `Dessert ${dessertsAdded}`,
          SIDES: `Sides ${sidesAdded}`,
        };

        const currentTabText = () =>
          tabNames[activeCategory] || `Dishes ${addedToCartList.length}`;

        return (
          <div className="filter-container">
            <form onSubmit={onFormSubmit} className="input-container">
              <div className="arrow-input-container">
                <MdKeyboardArrowLeft
                  onClick={onBackButton}
                  className="arrow-icon"
                />
                <input
                  onChange={(event) => onSearchInputChange(event.target.value)}
                  placeholder="Search dish for your party......"
                  type="search"
                  value={searchValue}
                  className="inputElement"
                />
              </div>
              <button type="submit" className="search-button">
                <CiSearch className="search-icon" />
              </button>
            </form>
            <div className="filter-buttons-container">
              <button
                onClick={() => onCategoryChange("STARTER")}
                className={`filter-buttons ${
                  activeCategory === "STARTER" && "active-button"
                }`}
              >
                Starter {startersAdded}
              </button>
              <button
                onClick={() => onCategoryChange("MAIN COURSE")}
                className={`filter-buttons ${
                  activeCategory === "MAIN COURSE" && "active-button"
                }`}
              >
                Main Course {mainCourseAdded}
              </button>
              <button
                onClick={() => onCategoryChange("DESSERT")}
                className={`filter-buttons ${
                  activeCategory === "DESSERT" && "active-button"
                }`}
              >
                Desert {dessertsAdded}
              </button>
              <button
                onClick={() => onCategoryChange("SIDES")}
                className={`filter-buttons ${
                  activeCategory === "SIDES" && "active-button"
                }`}
              >
                Sides {sidesAdded}
              </button>
            </div>
            <div className="selected-items-type-filter-container">
              <h1 className="selected-items-text">
                {currentTabText()} Selected
              </h1>
              <div className="type-filter-buttons-container">
                <button
                  onClick={() => onToggleDishType("VEG")}
                  className="type-filter-button"
                >
                  <div className={`type-veg-icon ${vegOnly && "toggled-icon"}`}>
                    <div className="veg-dot"></div>
                  </div>
                  <div
                    className={`type-icon-container ${
                      vegOnly && "toggled-icon-veg-container"
                    }`}
                  ></div>
                </button>
                <button
                  onClick={() => onToggleDishType("NON-VEG")}
                  className="type-filter-button"
                >
                  <div
                    className={`type-non-veg-icon ${
                      nonVegOnly && "toggled-icon"
                    }`}
                  >
                    <div className="non-veg-dot"></div>
                  </div>
                  <div
                    className={`type-icon-container ${
                      nonVegOnly && "toggled-icon-non-veg-container"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </PartyMenuContext.Consumer>
  );
};

export default Filters;
