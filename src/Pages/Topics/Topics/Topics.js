import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Topics.css";

const Topics = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learntocode-server.vercel.app/topics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h4>All course categories : {categories.length}</h4>
      </div>
      <div className="d-flex flex-wrap">
        {categories.map((category) => (
          <div key={category.id}>
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: "16rem" }} className="mb-2">
                    <Card.Body>
                      <Card.Title>{category.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {category.definition.slice(0, 150) + "..."}
                      </Card.Subtitle>
                      <Card.Text></Card.Text>

                      {/* <Button variant="light" className="border border-dark ">
                        <Link to={`/category/${category.id}`}>see details</Link>
                      </Button> */}
                      <p
                        variant="light"
                        className="border border-dark d-inline p-2 m-2 bg-warning "
                      >
                        <Link to={`/category/${category.id}`}>see details</Link>
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Topics;
