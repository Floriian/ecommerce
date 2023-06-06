import { TypedDocumentNode, gql } from "@apollo/client";
import { TProduct } from "@ecommerce/types";

export const GET_PRODUCT: TypedDocumentNode<{ product: TProduct }> = gql`
  query GetProuct($id: String!) {
    product(id: $id) {
      _id
      image
      title
      description
      manufacturer {
        name
      }
    }
  }
`;
