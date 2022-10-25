import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicsCard from "../../Shared/TopicsCard/TopicsCard";

const Category = () => {
  const allTopics = useLoaderData();
  console.log(allTopics);
  return (
    <div>
      <h2>this is category: {allTopics._id}</h2>
      {
        allTopics.map((topics) => (
        <TopicsCard key={topics._id} topics={topics}></TopicsCard>
      ))
      }
    </div>
  );
};

export default Category;
