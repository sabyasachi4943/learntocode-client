import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {

    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topics")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All categories : {categories.length}</h4>
      <div>
        {
          categories.map(category => <p key={category.id}>
            <Link to={`/category/${category.id}`}>{ category.name }</Link>
          </p>)
        }
      </div>
    </div>
  ); 

};

export default Topics;