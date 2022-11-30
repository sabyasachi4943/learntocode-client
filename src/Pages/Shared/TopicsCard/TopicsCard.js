import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CategoryDetails from "../../CategoryDetails/CategoryDetails";

const TopicsCard = ({ topics, handleAddToCart }) => {
  

  const topicExamples = topics.results[0].examples;
  return (
    <div className="d-flex m-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={topics.image_url} alt="" />
        <Card.Body>
          <Card.Title>{topics.term}</Card.Title>
          <Card.Text>Defination: {topics.results[0].definition}</Card.Text>
          <Card.Text>
            {topicExamples.map((topics) => (
              <li>{topics}</li>
            ))}
          </Card.Text>
          <Button variant="primary" onClick={() => handleAddToCart(topics)}>
            Get premium access
          </Button>
          <Link to="/checkout"></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopicsCard;
