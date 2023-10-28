import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logov1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle.js";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
        await axios.post("/dj-rest-auth/logout/");
        setCurrentUser(null);
    } catch (err) {
        //console.log(err);
    }
};

  const addPostEventIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeclassname={styles.Active}
        to="/posts/create"
      >
        <i className="far fa-plus-square"></i>Add post
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeclassname={styles.Active}
        to="/events/create"
      >
        <i className="fa-regular fa-calendar-plus"></i>Add event
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/aboutpage"
      >
        <i className="fa-solid fa-leaf"></i>About
      </NavLink>
        <NavDropdown
          className={styles.NavDropdown}
          activeclassname={styles.Active}
          title={<span><i className="fas fa-stream"></i>Feed</span>}
          onClick={() => {
            setExpanded(!expanded)
          }}
        >
          <NavDropdown.Item
            className={styles.NavLink}
            as={NavLink}
            activeClassName={styles.Active}
            to="/posts"
          >
          <i className="fa-solid fa-images"></i>Posts
          </NavDropdown.Item>
          <NavDropdown.Item
            className={styles.NavLink}
            as={NavLink}
            activeClassName={styles.Active}
            to="/liked"
          >
            <i className="fas fa-heart"></i>Liked
          </NavDropdown.Item>
          <NavDropdown.Item
            className={styles.NavLink}
            as={NavLink}
            activeclassname={styles.Active}
            to="/going"
          >
            <i className="fa-solid fa-circle-check"></i>Going
          </NavDropdown.Item>
          <NavDropdown.Item
            className={styles.NavLink}
            as={NavLink}
            activeclassname={styles.Active}
            to="/events"
          >
            <i className="fa-regular fa-calendar-days"></i>Events
          </NavDropdown.Item>
        </NavDropdown>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/aboutpage"
      >
        <i className="fa-solid fa-leaf"></i>About
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="80" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostEventIcons}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;