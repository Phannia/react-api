import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Characters from "./Characters";
import { Button } from "react-bootstrap";

const Buscador = ({onSearch}) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSearch();
  }
  return (
  <>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <h4>
              Find a character
            </h4>
          </Form.Label>
          <Form.Control 
          autoComplete="off"
          type="text" 
          placeholder="Enter a character name" />
        </Form.Group>
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>
      <div className="mt-5 d-flex justify-content-center gap-3">
      </div>
    </Container>
  </>
    
  );
};

export default Buscador;
