import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  const mealslist = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={Math.random()} className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{mealslist}</div>;
};

export default Meals;
