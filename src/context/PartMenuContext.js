import React from "react";

const PartyMenuContext = React.createContext({
  dishesList: [],
  activeCategory: "",
  searchTerm: "",
  vegOnly: false,
  nonVegOnly: false,
  addedToCartList: [],
  onCategoryChange: () => {},
  onSearchChange: () => {},
  onToggleDishType: () => {},
  onAddtoCart: () => {},
  onRemoveFromCart: () => {},
});

export default PartyMenuContext;
