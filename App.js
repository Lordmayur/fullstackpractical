import React, { useState } from 'react';

const App = () => {
const [productName, setProductName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  // Assuming you'll perform validation here before proceeding
  // For simplicity, we'll just log the product details to the console.
  console.log('Product Name:', productName);
  console.log('Description:', description);
  console.log('Price:', price);
  // Add code here to submit the data to the server or state management system.
  // You can also reset the form fields after submission if needed.
};

return (
  <form onSubmit={handleSubmit}>
  <br/><br/><br/><br/><br/>
    <table align="center">
    <tr><td><label htmlFor="p"><h1>PRODUCT DETAILS </h1></label></td></tr>
<tr><td><label htmlFor="productName">Product Name: </label></td>
<td>  <input
    type="text"
    id="productName"
    value={productName}
    onChange={(e) => setProductName(e.target.value)}
    required
    /></td></tr>
  
  <tr><td><label htmlFor="description">Description: </label></td>
  <td> <textarea
    id="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
    /></td></tr>
 
  <tr><td><label htmlFor="price">Price:</label></td>
  <td> <input
    type="number"
    id="price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    required
    /></td></tr>


<tr><td><button type="submit">Add Product</button></td></tr>
</table>

  </form>

);
};

export default App;
