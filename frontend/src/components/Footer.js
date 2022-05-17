import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundColor: "#454B51", color:"white"}}>
      <Container>
        <Row >
          <Col className='text-center py-3'>Copyright &copy; Personal Shop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
