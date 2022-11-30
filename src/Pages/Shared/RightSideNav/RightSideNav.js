import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
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
    </div>
  );
};

export default RightSideNav;
