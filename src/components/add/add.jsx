import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { productsData } from "../../API/Users";
import Button from "react-bootstrap/Button";

const AddNewProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [character, setCharacter] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("");

  const producst = productsData.items;
  const newList = [];
  newList.push(producst);
  const aux = {
    id: producst.length,
    image: image,
    title: title,
    character: character,
    description: description,
    value: value,
    currency: currency,
  };

  const products = () => {
    if (
      image.toLocaleLowerCase().trim() ||
      character.toLocaleLowerCase().trim() === ""
    ) {
      alert("vacio");
    } else {
      newList[0].push(aux);
      console.log(newList);
    }
  };

  return (
    <>
      <center>
        <Card
          bg="info"
          text="ligth? black : white"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Add new products</Card.Header>
          <Card.Body>
            <Card.Title>Form to Add New Product </Card.Title>
            <Form.Floating className="mb-3">
              <br />
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingImageCustom"
                  type="text"
                  placeholder="Image"
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="floatingImageCustom">Image</label>
              </Form.Floating>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingTitleCustom"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="floatingTitleCustom">Title</label>
            </Form.Floating>
            <br />
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingCharacterCustom"
                type="text"
                placeholder="character"
                onChange={(e) => setCharacter(e.target.value)}
              />
              <label htmlFor="floatingCharacterCustom">Character</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingDescriptionCustom"
                type="text"
                placeholder="Title"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="floatingDescriptionCustom">Description</label>
            </Form.Floating>
            <br />
            <Form.Floating>
              <Form.Control
                id="floatingValueCustom"
                type="text"
                placeholder="Title"
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="floatingValueCustom">Value</label>
            </Form.Floating>
            <br />
            <Form.Floating>
              <Form.Control
                id="floatingCurrencyCustom"
                type="text"
                placeholder="Title"
                onChange={(e) => setCurrency(e.target.value)}
              />
              <label htmlFor="floatingCurrencyCustom">Currency</label>
            </Form.Floating>
          </Card.Body>
        </Card>
        <Button onClick={products} type="submit" variant="outline-success">
          Submit
        </Button>
      </center>
    </>
  );
};

export default AddNewProduct;
