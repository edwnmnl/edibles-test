import { useState } from "react";

const FoodItem = (props) => {
  const [option, setOption] = useState(0);

  const changeOption = (option) => {
    setOption(option);
  };

  return (
    <div className="food__item">
      <div className="meal__type">{props.item.type}</div>
      <br />
      <img src={props.item.options[option].image_url} alt="lorem" />
      <div className="switch">
        <div
          className={option === 0 ? "switch__option_active" : "switch__option"}
          onClick={() => changeOption(0)}
        >
          A
        </div>
        <div
          className={option === 1 ? "switch__option_active" : "switch__option"}
          onClick={() => changeOption(1)}
        >
          B
        </div>
      </div>
      <br />
      <div className="meal__name">{props.item.options[option].name}</div>
    </div>
  );
};

const FoodMenu = (props) => {
  return (
    <div className="food__menu">
      {props.menu && props.menu.map((item) => <FoodItem item={item} />)}
      {/* {console.log(menu)} */}
    </div>
  );
};

export default FoodMenu;
