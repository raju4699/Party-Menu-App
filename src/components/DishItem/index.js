import Popup from "reactjs-popup";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";

import PartyMenuContext from "../../context/PartMenuContext";
import "./index.css";

const DishItem = (props) => {
  const { dishDetails } = props;
  const { id, name, type, description, image, ingredients } = dishDetails;
  const typeIconClass = type === "VEG" && "type-veg-icon";
  const typeDotClass = type === "VEG" && "veg-dot";

  return (
    <PartyMenuContext.Consumer>
      {(value) => {
        const { addedToCartList, onAddtoCart, onRemoveFromCart } = value;
        const isAdded = addedToCartList.some((each) => each.id === id);
        return (
          <li className="dish-list-item">
            <div className="dish-list-item-container">
              <div className="dish-text-container">
                <div className="name-container">
                  <h1 className="dish-name">{name}</h1>
                  <div className={`type-non-veg-icon ${typeIconClass}`}>
                    <div className={`non-veg-dot ${typeDotClass}`}></div>
                  </div>
                </div>
                <p className="dish-description">
                  {description.slice(0, 40)} . . . .
                  <Popup
                    modal
                    trigger={
                      <button className="read-more-button">Read More</button>
                    }
                    closeOnDocumentClick
                    contentStyle={{
                      background: "#fff",
                      borderRadius: "20px 20px 0 0",
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "16px",
                    }}
                    overlayStyle={{
                      background: "#00000090",
                    }}
                  >
                    <div className="popup-dish-item-container">
                      <img
                        alt="dish"
                        className="popup-dish-item-image"
                        src={image}
                      />
                      <div className="popup-dish-item-sub-container">
                        <div className="popup-dish-item-name-container">
                          <div className="name-container">
                            <h1 className="popup-dish-item-name">{name}</h1>
                            <div
                              className={`type-non-veg-icon ${typeIconClass}`}
                            >
                              <div
                                className={`non-veg-dot ${typeDotClass}`}
                              ></div>
                            </div>
                          </div>
                          <button
                            onClick={
                              isAdded
                                ? () => onRemoveFromCart(id)
                                : () => onAddtoCart(dishDetails)
                            }
                            className="popup-dish-item-button"
                          >
                            {isAdded ? (
                              <p className="remove-text">Remove</p>
                            ) : (
                              <>
                                <p className="add-text">Add</p>
                                <FiPlus className="add-icon" />
                              </>
                            )}
                          </button>
                        </div>
                        <p className="popup-dish-item-description">
                          {description}
                        </p>
                        <Popup
                          modal
                          trigger={
                            <button className="ingredient-button">
                              <img
                                alt="ingredient"
                                src="https://res.cloudinary.com/don6xt1fg/image/upload/v1757758048/fi_15315413_bp1ewr.png"
                              />
                              <p className="popup-ingredients-text">
                                Ingredients
                              </p>
                            </button>
                          }
                          contentStyle={{
                            background: "#fff",
                            position: "fixed",
                            height: "100%",
                            left: 0,
                            right: 0,
                            padding: "16px",
                          }}
                          overlayStyle={{
                            background: "#00000090",
                          }}
                        >
                          {(close) => (
                            <div className="ingredients-popup-container">
                              <div className="ingredients-popup-header-container">
                                <button
                                  type="button"
                                  className="arrow-back-button"
                                  onClick={() => close()}
                                >
                                  <MdKeyboardArrowLeft className="arrow-icon" />
                                </button>
                                <h1 className="popup-dish-item-name">
                                  Ingredient List
                                </h1>
                              </div>
                              <img
                                alt="ingredients"
                                className="ingredients-popup-image"
                                src="https://res.cloudinary.com/don6xt1fg/image/upload/v1757840316/9575ae5a678baeb9141729afef2ba06ec64b3cab_jbiy6n.png"
                              />
                              <h1 className="ingredients-popup-name">{name}</h1>
                              <div className="ingredients-popup-text-container">
                                <h1 className="popup-dish-item-name">
                                  Ingredients
                                </h1>
                                <p className="ingredients-popup-text">
                                  For 2 People
                                </p>
                                <hr className="ingredients-popup-line" />
                              </div>
                              <ul className="ingredients-popup-list-container">
                                {ingredients.map((each) => (
                                  <li className="ingredients-popup-list-item">
                                    <p className="ingredients-popup-text">
                                      {each.name}
                                    </p>
                                    <p className="ingredients-popup-text">
                                      {each.quantity}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </Popup>
                      </div>
                    </div>
                  </Popup>
                </p>
                <Popup
                  modal
                  trigger={
                    <button className="ingredient-button">
                      <img
                        alt="ingredient"
                        src="https://res.cloudinary.com/don6xt1fg/image/upload/v1757758048/fi_15315413_bp1ewr.png"
                      />
                      <p className="ingredients-text">Ingredients</p>
                    </button>
                  }
                  contentStyle={{
                    background: "#fff",
                    position: "fixed",
                    height: "100%",
                    left: 0,
                    right: 0,
                    padding: "16px",
                  }}
                  overlayStyle={{
                    background: "#00000090",
                  }}
                >
                  {(close) => (
                    <div className="ingredients-popup-container">
                      <div className="ingredients-popup-header-container">
                        <button
                          type="button"
                          className="arrow-back-button"
                          onClick={() => close()}
                        >
                          <MdKeyboardArrowLeft className="arrow-icon" />
                        </button>
                        <h1 className="popup-dish-item-name">
                          Ingredient List
                        </h1>
                      </div>
                      <img
                        alt="ingredients"
                        className="ingredients-popup-image"
                        src="https://res.cloudinary.com/don6xt1fg/image/upload/v1757840316/9575ae5a678baeb9141729afef2ba06ec64b3cab_jbiy6n.png"
                      />
                      <h1 className="ingredients-popup-name">{name}</h1>
                      <div className="ingredients-popup-text-container">
                        <h1 className="popup-dish-item-name">Ingredients</h1>
                        <p className="ingredients-popup-text">For 2 People</p>
                        <hr className="ingredients-popup-line" />
                      </div>
                      <ul className="ingredients-popup-list-container">
                        {ingredients.map((each) => (
                          <li className="ingredients-popup-list-item">
                            <p className="ingredients-popup-text">
                              {each.name}
                            </p>
                            <p className="ingredients-popup-text">
                              {each.quantity}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Popup>
              </div>
              <div className="image-button-container">
                <img alt="dish" className="dish-image" src={image} />
                <button
                  onClick={
                    isAdded
                      ? () => onRemoveFromCart(id)
                      : () => onAddtoCart(dishDetails)
                  }
                  className="add-button"
                >
                  {isAdded ? (
                    <p className="remove-text">Remove</p>
                  ) : (
                    <>
                      <p className="add-text">Add</p>
                      <FiPlus className="add-icon" />
                    </>
                  )}
                </button>
              </div>
            </div>
            <hr className="horizontal-line" />
          </li>
        );
      }}
    </PartyMenuContext.Consumer>
  );
};

export default DishItem;
