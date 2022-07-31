import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "../styles/Nav.module.scss";
import { AbbrTagStyled } from "../styles/utils";

import { BsSearch, BsPersonFill } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";

import { IconButton } from "@chakra-ui/react";

const Navigation = () => {
  const [show, setShow] = useState(false);

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
              <Nav.Link href="#link">Home</Nav.Link>
              <Nav.Link href="#home">Trending</Nav.Link>
              <Nav.Link href="#link">New</Nav.Link>
              <Nav.Link href="#link">Popular</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            {/*  */}
            <Nav className="ms-auto" id={styles._navigation_links_wrapper_}>
              <Nav.Link>
                <AbbrTagStyled title="Search">
                  <IconButton
                    aria-label="Search Films"
                    icon={
                      <BsSearch
                        className={styles._navigation_links_main_icon_}
                      />
                    }
                    className={styles._navigation_links_icon_}
                  />
                </AbbrTagStyled>
              </Nav.Link>
              <Nav.Link>
                <AbbrTagStyled title="User Settings">
                  <IconButton
                    aria-label="User Settings"
                    icon={
                      <BsPersonFill
                        className={styles._navigation_links_main_icon_}
                      />
                    }
                    className={styles._navigation_links_icon_}
                  />
                </AbbrTagStyled>
              </Nav.Link>
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
          <a href="#">Home</a>
          <br />
          <a href="#">Trending</a>
          <br />
          <a href="#">New</a>
          <br />
          <a href="#">Popular</a>
          <br />
          <a href="#">My Fave</a>
          <br />
          <hr className={styles._offcanvas_divider_} />
          <a href="#">Search</a>
          <br />
          {/* IF USER IS NOT LOGGED IN */}
          <a id={styles._link_action_btns_IN}>Log In</a>
          {/* END */}
          <br />
          {/* ###################################### */}
          {/* IF USER IS LOGGED IN */}
          <a id={styles._link_action_btns_OUT}>Log Out</a>
          {/* END */}
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}

      {/* ################################################################# */}
    </>
  );
};

export default Navigation;
