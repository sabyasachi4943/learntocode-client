import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import TopicsCard from "../../Shared/TopicsCard/TopicsCard";
import Pdf from "react-to-pdf";
import CategoryDetails from "../../CategoryDetails/CategoryDetails";
import { addToDb } from "../../../utilities/fakedb";
import { CartContext } from "../../../contexts/CartContext/CartContextProvider";

const ref = React.createRef();

const Category = () => {
  const allTopics = useLoaderData();
  const navigate = useNavigate();
  const {AddToCart} =useContext(CartContext)

  const handleAddToCart = (topics) => {
    AddToCart(topics); 
    navigate("/checkout")
  }
  const term = allTopics[1].term;
  return (
    <div>
      <CategoryDetails term={term}></CategoryDetails>
      <Pdf targetRef={ref} filename={term + "-course-material.pdf"}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      <div ref={ref} className="d-flex">
        {allTopics.map((topics) => (
          <TopicsCard
            key={topics._id}
            topics={topics}
            handleAddToCart={handleAddToCart}
          ></TopicsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
