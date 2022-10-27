import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaEnvelope, FaTwitter, FaFacebook, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const RightSideNav = () => {
  
  const { providerLogin } = useContext(AuthContext);
  
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  }

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.error(error));
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button
          onClick={handleGithubSignIn}
          className="mb-2"
          variant="outline-dark"
        >
          <FaGithub></FaGithub> Login with Github
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaEnvelope></FaEnvelope> <Link to="/login">Login with Email</Link>
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
