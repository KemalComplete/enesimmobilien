import React from "react"
import "./App.css"
import styled from "styled-components"
import { motion, Frame } from "framer"
import icon from "./images/icon.svg"

const Nav = styled(motion.div)`
  /* background-color: #191d1f; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 0 16px; */
  cursor: pointer;
`
const Container = styled(motion.div)`
  /* background-color: #191d1f; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 0 16px; */
  cursor: pointer;
`

const Logo = styled(motion.img)`
  height: 96px;
  padding: 32px;
`
const Text = styled.p`
  /* font-family: "Inconsolata", monospace; */
  /* font-family: "Josefin Sans", sans-serif; */
  font-family: "Comfortaa", cursive;
  /* font-family: "Didact Gothic", sans-serif; */
  /* font-family: "Cookie", cursive; */
  /* font-family: "Poiret One", cursive; */
  `
const Link = styled.a`
  font-family: "Comfortaa", cursive;
  padding: 16px;
  font-size: 0.7em;
`

const App = () => (
  <Container>
    {/* <Logo href="/">enesimmobilien</Logo> */}
    <Nav>
      <Logo
        src={icon}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ scale: 0.95, opacity: 0.9, y: 0 }}
        // transition={{ duration: 0.5, ease: "ease" }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      ></Logo>
      <Link>Properties</Link>
      <Link>About Us</Link>
      <Link>Contact</Link>
    </Nav>
  </Container>
)
export default App
