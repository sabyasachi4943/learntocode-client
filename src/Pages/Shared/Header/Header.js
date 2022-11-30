import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCommentsDollar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => FaCommentsDollar.error(error));
  };

  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Dark", value: "1" },
    { name: "Light", value: "2" },
  ];

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              LearnToCode
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <p variant="light" className="m-3">
                <Link to="/topics" className="text-decoration-none">
                  Courses
                </Link>
              </p>
              <p variant="light" className="m-3">
                <Link to="/faq" className="text-decoration-none">
                  FAQ
                </Link>
              </p>
              <p variant="light" className="m-3">
                <Link to="/blog" className="text-decoration-none">
                  Blog
                </Link>
              </p>
              <p variant="light" className="m-3">
                <Link to="/orders" className="text-decoration-none">
                  Orders
                </Link>
              </p>
            </Nav>
            <Nav>
              <>
                <ButtonGroup className="mb-2 me-3 border border-dark">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="light"
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </>
              <>
                {user?.uid ? (
                  <>
                    <div>
                      <span>{user?.displayName}</span>
                      <Button variant="light" onClick={handleLogOut}>
                        LogOut
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Button variant="light" className="me-3">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button variant="light" className="me-3">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </>
              <Link to="/profile">
                {user?.photoURL ? (
                  <>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-bottom`}>
                          <span>{user?.displayName}</span>.
                        </Tooltip>
                      }
                    >
                      <Image
                        style={{ height: "40px" }}
                        roundedCircle
                        src={user.photoURL}
                      ></Image>
                    </OverlayTrigger>
                  </>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
