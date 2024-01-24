import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getCategories() {

    return client.fetch(
      groq`*[_type == "category"]{
        name,
          products[]->{_id, name, price, description}
      }`

    );
  }

export async function getProducts(){
  return client.fetch(
    groq`*[_type == "product"]{
      name,
      price, 
      description
    }`
  );
}

