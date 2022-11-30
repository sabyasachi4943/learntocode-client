import React, { useEffect } from "react";
import { useState } from "react";

const CategoryDetails = ({ term }) => {
  const [categoryDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    fetch(`https://learntocode-server.vercel.app/category-details/${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryDetails(data);
      });
  }, [term]);
  return (
    <div>
      <h3>{categoryDetails[0]?.name}</h3>
      <p>
        About the course: <br /> {categoryDetails[0]?.definition}
      </p>
    </div>
  );
};

export default CategoryDetails;
