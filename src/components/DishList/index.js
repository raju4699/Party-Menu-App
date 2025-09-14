import PartyMenuContext from "../../context/PartMenuContext";
import DishItem from "../DishItem";

import "./index.css";

const DishList = () => (
  <PartyMenuContext.Consumer>
    {(value) => {
      const { dishesList } = value;
      return (
        <ul className="dishes-list-container">
          {dishesList.map((each) => (
            <DishItem key={each.id} dishDetails={each} />
          ))}
        </ul>
      );
    }}
  </PartyMenuContext.Consumer>
);

export default DishList;
