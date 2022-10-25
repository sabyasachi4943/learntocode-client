import React from 'react';

const TopicsCard = ({ topics }) => {
  console.log(topics);
  return (
    <div>
      <h2>this is card from topicsCard</h2>
      {topics.term}
    </div>
  );
};

export default TopicsCard;