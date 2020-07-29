/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      type
      price
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets {
    listPets {
      id
      type
      price
    }
  }
`;
export const listPetsByPriceRange = /* GraphQL */ `
  query ListPetsByPriceRange($min: Float, $max: Float) {
    listPetsByPriceRange(min: $min, max: $max) {
      id
      type
      price
    }
  }
`;
export const checkPetPriceGreater = /* GraphQL */ `
  query CheckPetPriceGreater($id: ID!, $price: Float) {
    checkPetPriceGreater(id: $id, price: $price)
  }
`;
