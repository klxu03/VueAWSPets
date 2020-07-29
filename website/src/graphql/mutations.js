/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPet = /* GraphQL */ `
  mutation CreatePet($input: PetInput!) {
    createPet(input: $input) {
      id
      type
      price
    }
  }
`;

// Manually editted updatePet (probs/might not work)
export const updatePet = /* GraphQL */ `
  mutation UpdatePet($id: ID!, $price: Float!) {
    updatePet(id: $id, price: $price) {
      id
      type
      price
    }
  }
`;
export const deletePet = /* GraphQL */ `
  mutation DeletePet($id: ID!) {
    deletePet(id: $id) {
      id
      type
      price
    }
  }
`;
