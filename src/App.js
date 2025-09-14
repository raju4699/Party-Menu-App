import { Component } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import PartyMenuContext from "./context/PartMenuContext";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import "./App.css";

class App extends Component {
  state = {
    dishesList: dishes,
    activeCategory: "",
    searchTerm: "",
    vegOnly: false,
    nonVegOnly: false,
    addedToCartList: [],
  };

  onCategoryChange = (category) => {
    this.setState((prevState) => {
      const newCategory = prevState.activeCategory === category ? "" : category;

      const filteredDishes = dishes.filter((each) => {
        const categoryMatch = !newCategory || each.mealType === newCategory;

        let typeMatch = true;
        if (prevState.vegOnly && prevState.nonVegOnly) {
          typeMatch = true;
        } else if (prevState.vegOnly) {
          typeMatch = each.type === "VEG";
        } else if (prevState.nonVegOnly) {
          typeMatch = each.type === "NON-VEG";
        }

        const searchMatch = prevState.searchTerm
          ? each.name.toLowerCase().includes(prevState.searchTerm.toLowerCase())
          : true;

        return categoryMatch && typeMatch && searchMatch;
      });

      return {
        activeCategory: newCategory,
        dishesList: filteredDishes,
      };
    });
  };

  onToggleDishType = (type) => {
    this.setState((prevState) => {
      const vegOnly = type === "VEG" ? !prevState.vegOnly : prevState.vegOnly;
      const nonVegOnly =
        type === "NON-VEG" ? !prevState.nonVegOnly : prevState.nonVegOnly;

      const filteredDishes = dishes.filter((each) => {
        const categoryMatch =
          !prevState.activeCategory ||
          each.mealType === prevState.activeCategory;

        let typeMatch = true;
        if (vegOnly && nonVegOnly) {
          typeMatch = true;
        } else if (vegOnly) {
          typeMatch = each.type === "VEG";
        } else if (nonVegOnly) {
          typeMatch = each.type === "NON-VEG";
        }

        const searchMatch = prevState.searchTerm
          ? each.name.toLowerCase().includes(prevState.searchTerm.toLowerCase())
          : true;

        return categoryMatch && typeMatch && searchMatch;
      });

      return {
        vegOnly,
        nonVegOnly,
        dishesList: filteredDishes,
      };
    });
  };

  onSearchChange = (value) => {
    this.setState((prevState) => {
      const searchTerm = value.toLowerCase();

      const filteredDishes = dishes.filter((each) => {
        const categoryMatch =
          !prevState.activeCategory ||
          each.mealType === prevState.activeCategory;

        let typeMatch = true;
        if (prevState.vegOnly && prevState.nonVegOnly) {
          typeMatch = true;
        } else if (prevState.vegOnly) {
          typeMatch = each.type === "VEG";
        } else if (prevState.nonVegOnly) {
          typeMatch = each.type === "NON-VEG";
        }

        const searchMatch = each.name.toLowerCase().includes(searchTerm);

        return categoryMatch && typeMatch && searchMatch;
      });

      return {
        searchTerm: value,
        dishesList: filteredDishes,
      };
    });
  };

  onAddtoCart = (dish) => {
    this.setState((prevState) => ({
      addedToCartList: [...prevState.addedToCartList, dish],
    }));
  };

  onRemoveFromCart = (id) => {
    this.setState((prevState) => ({
      addedToCartList: prevState.addedToCartList.filter(
        (each) => each.id !== id
      ),
    }));
  };

  render() {
    const {
      dishesList,
      activeCategory,
      searchTerm,
      vegOnly,
      nonVegOnly,
      addedToCartList,
    } = this.state;
    return (
      <PartyMenuContext.Provider
        value={{
          dishesList,
          activeCategory,
          searchTerm,
          vegOnly,
          nonVegOnly,
          addedToCartList,
          onCategoryChange: this.onCategoryChange,
          onToggleDishType: this.onToggleDishType,
          onSearchChange: this.onSearchChange,
          onAddtoCart: this.onAddtoCart,
          onRemoveFromCart: this.onRemoveFromCart,
        }}
      >
        <div className="app-container">
          <Filters />
          <DishList />
        </div>
        <div className="footer-container">
          <div className="footer-total-text-container">
            <p className="footer-total-text">
              Total Dish Selected{" "}
              <span className="footer-total-text footer-total-text-span">
                {addedToCartList.length}
              </span>
            </p>
            <MdKeyboardArrowRight className="arrow-icon" />
          </div>
          <div className="footer-button-container">
            <button className="footer-button">Continue</button>
          </div>
        </div>
      </PartyMenuContext.Provider>
    );
  }
}
export default App;
