import React from 'react';

const TopicsCard = ({ topics }) => {
  console.log(topics);

  const topicExamples = topics.results[0].examples;
  return (
    <div>
      <h2>{topics.term}</h2>
      <img src={topics.image_url} alt="" />
      <h5>Defination: {topics.results[0].definition}</h5>
      {
        topicExamples.map((topics) => (
        <li>{topics}</li>
      ))
      }
      
    </div>
  );
};

export default TopicsCard;