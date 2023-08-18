import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
// import { productsData } from "../../API/Users";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const AddNewProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [character, setCharacter] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("");
  const { list } = useContext(AuthContext);

  const producst = list[0].items;
  const newList = [];
  newList.push(producst);
  const aux = {
    id: producst.length,
    img: image,
    title: title,
    character: character,
    description: description,
    value: value,
    currency: currency,
  };

  const products = () => {
    if (
      image.trim() === "" ||
      title.trim() === "" ||
      character.trim() === "" ||
      description.trim() === "" ||
      value.trim() === "" ||
      currency.trim() === ""
    ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your product has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      newList[0].push(aux);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
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
                  value={image}
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
                value={title}
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
                value={character}
              />
              <label htmlFor="floatingCharacterCustom">Character</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingDescriptionCustom"
                type="text"
                placeholder="Title"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
                value={value}
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
                value={currency}
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
