import React from "react"
import "./App.css"
import styled from "styled-components"
import { motion, Frame } from "framer"
import logo from "./logo.svg"

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

const Logo = styled.img`
  width: 256px;
`

const App = () => (
  <Container whileHover={{ scale: 0.9 }}>
    {/* <Logo href="/">enesimmobilien</Logo> */}
    <Logo src={logo}></Logo>
  </Container>
)
export default App
