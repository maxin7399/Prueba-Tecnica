import { Product } from "../types/Product";

export async function getProducts() : Promise<Product[]> {
  const API_URL = "https://fakestoreapi.com/products";
  const RawData = await fetch(API_URL);
  const Data = await RawData.json();
  return Data;
}
