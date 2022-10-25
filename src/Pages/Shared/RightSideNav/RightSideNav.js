import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaEnvelope, FaTwitter, FaFacebook, FaWhatsapp, FaTwitch } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaEnvelope></FaEnvelope> Login with Email
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch> Twitch </ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook </ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Whatsapp </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
