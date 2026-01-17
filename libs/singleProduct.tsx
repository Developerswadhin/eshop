import axios from "axios";

async function singleProduct(id: number) {
  const response = await axios.get(`https://grineasy.com/products/${id}`);

  if (!response.data) throw new Error("Single Data not Found");

  //return data
  return response.data;
}

export default singleProduct;
