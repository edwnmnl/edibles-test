import { useState } from "react";

const FoodItem = (props) => {
  const [option, setOption] = useState(0);

  const changeOption = (e) => {
    if (e.target.checked) {
      setOption(1);
    } else {
      setOption(0);
    }
  };

  return (
    <div className="food__item">
      <div className="meal__type">{props.item.type}</div>
      <br />
      <img src={props.item.options[option].image_url} alt="lorem" />
      <label class="switch">
        <input type="checkbox" onChange={changeOption} />
        <span class="slider round">
          <span class="on">A</span>
          <span class="off">B</span>
        </span>
      </label>

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
