import { useState, useEffect } from "react";
import "./App.css";
import FoodMenu from "./components/FoodMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DateMenu from "./components/DateMenu";
import { data } from "./data";
import ContactForm from "./components/ContactForm";

function App() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setMenu(getMenuByDate("01/02/2021"));
  }, []);

  const getMenuByDate = (date) => {
    let result = null;
    data.forEach((item) => {
      if (item.date === date) {
        // console.log("result found: " + item);
        result = item;
      }
      console.log(result);
    });
    return result.menu;
  };

  const handleDateChange = (date) => {
    console.log("date: " + date);

    const menuData = getMenuByDate(date);
    setMenu(menuData);
    console.log(getMenuByDate(date));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <br />
        <br />
        <h2 className="page__title">Choose your dishes</h2>

        <center>
          <img
            src="/img/underline.png"
            alt="sdsd"
            width="350px"
            // style={{ textAlign: "center" }}
          />
        </center>
        <br />
        <p style={{ textAlign: "center" }}>
          As per your recomended calorie, choose your dishes from below
        </p>
        <br />
        <br />
        <br />
      </div>
      <main>
        <div className="container">
          <DateMenu onChange={handleDateChange} />

          <FoodMenu menu={menu} />
        </div>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
