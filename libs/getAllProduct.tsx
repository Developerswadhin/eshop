import React from "react";
import axios from "axios";

async function getAllProduct() {
  //hit api
  const response = await axios.get("https://grineasy.com/products");

  //handle errpr

  if (!response.data) throw new Error("Data Not Found");

  //return data

  return response.data;
}

export default getAllProduct;
