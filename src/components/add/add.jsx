import React from "react";
import Form from "react-bootstrap/Form";
const AddNewProduct = () => {
  return (
    <>
      <h2>Form to Add New Product</h2>
      <Form.Floating className="mb-3">
        <br />
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingImageCustom"
            type="text"
            placeholder="Image"
          />
          <label htmlFor="floatingImageCustom">Image</label>
        </Form.Floating>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingTitleCustom"
          type="text"
          placeholder="Title"
        />
        <label htmlFor="floatingTitleCustom">Title</label>
      </Form.Floating>
      <br />
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingCharacterCustom"
          type="text"
          placeholder="character"
        />
        <label htmlFor="floatingCharacterCustom">Character</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingDescriptionCustom"
          type="text"
          placeholder="Title"
        />
        <label htmlFor="floatingDescriptionCustom">Description</label>
      </Form.Floating>
      <br />
      <Form.Floating>
        <Form.Control
          id="floatingValueCustom"
          type="text"
          placeholder="Title"
        />
        <label htmlFor="floatingValueCustom">Value</label>
      </Form.Floating>
    </>
  );
};

export default AddNewProduct;
