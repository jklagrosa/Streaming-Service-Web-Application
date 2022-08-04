import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "../styles/Nav.module.scss";
import { AbbrTagStyled } from "../styles/utils";

import { MdMenuOpen } from "react-icons/md";
import { useRouter } from "next/router";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const x = window.localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user") || "false")
      : null;

    if (x === "false" || x === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className={styles._navigation_wrapper_}>
        <Container fluid="lg" className="p-0">
          <Navbar.Brand className={styles._navigation_brand_logo_}>
            PELI<span>KULA</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ outline: "none", boxShadow: "none", border: "none" }}
          >
            <MdMenuOpen
              className={styles._hamburger_menu_}
              onClick={handleShow}
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles._navigation_collapse_}
          >
            <Nav className="me-auto" id={styles._navigation_links_wrapper_}>
              <Nav.Link onClick={() => router.replace("/")}>Home</Nav.Link>
              <Nav.Link href="#new">New</Nav.Link>
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#popular">Popular</Nav.Link>
              <Nav.Link onClick={() => (window.location.href = "/favourites")}>
                My Fave
              </Nav.Link>
            </Nav>

            {/* ### */}

            <Nav className="ms-auto" id={styles._navigation_links_wrapper_}>
              {/* <AbbrTagStyled title="Search movies">
                <Nav.Link href="#link">Search</Nav.Link>
              </AbbrTagStyled> */}
              {/* IF USER IS NOT LOGGED IN */}
              {!isLoggedIn && (
                <AbbrTagStyled title="Login as Demo User">
                  <Nav.Link
                    onClick={() => (window.location.href = "/login")}
                    id={styles._navigation_log_in_btn_}
                  >
                    Login
                  </Nav.Link>
                </AbbrTagStyled>
              )}
              {/* END */}
              {/* ### */}
              {/* IF USER IS LOGGED IN */}
              {isLoggedIn && (
                <AbbrTagStyled title="Logout">
                  <Nav.Link
                    onClick={() => {
                      window.location.href = "/login";
                      window.localStorage.removeItem("user");
                    }}
                    id={styles._navigation_log_out_btn_}
                  >
                    Logout
                  </Nav.Link>
                </AbbrTagStyled>
              )}
              {/* END */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* LINKS OFFCANVAS */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        id={styles._offcanvas_main_wrapper_}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={styles._offcanvas_title_}>
            PELI<span>KULA</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id={styles._offcanvas_body_}>
          <a onClick={() => router.replace("/")}>Home</a>
          <br />
          <a href="#new">New</a>
          <br />
          <a href="#trending">Trending</a>
          <br />
          <a href="#popular">Popular</a>
          <br />
          <a onClick={() => (window.location.href = "/favourites")}>My Fave</a>
          <br />
          <hr className={styles._offcanvas_divider_} />

          {/* IF USER IS NOT LOGGED IN */}
          {!isLoggedIn && (
            <>
              <a
                id={styles._link_action_btns_IN}
                onClick={() => (window.location.href = "/login")}
              >
                Log In
              </a>

              <br />
            </>
          )}
          {/* ###################################### */}
          {/* IF USER IS LOGGED IN */}
          {isLoggedIn && (
            <>
              <a
                id={styles._link_action_btns_OUT}
                onClick={() => {
                  window.location.href = "/login";
                  window.localStorage.removeItem("user");
                }}
              >
                Log Out
              </a>
            </>
          )}

          {/* END */}
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}

      {/* ################################################################# */}
    </>
  );
};

export default Navigation;
