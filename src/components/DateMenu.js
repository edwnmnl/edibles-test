import { useState } from "react";

const dates = [
  "01/02/2021",
  "02/02/2021",
  "03/02/2021",
  "04/02/2021",
  "05/02/2021",
  "06/02/2021",
];

const DateMenu = (props) => {
  const [selectedDate, setSelectedDate] = useState("01/02/2021");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.onChange(date);
  };

  return (
    <div className="sidebar">
      <ul className="date__menu">
        {dates &&
          dates.map((date) => (
            <>
              <li
                className={
                  selectedDate === date
                    ? "date__menu_date_active"
                    : "date__menu_date"
                }
                onClick={() => handleDateChange(date)}
              >
                {date}
              </li>
            </>
          ))}
      </ul>
      <br />
      <center>
        <button className="btn__primary date__menu_button">
          Select custom date
        </button>
      </center>
    </div>
  );
};

export default DateMenu;
