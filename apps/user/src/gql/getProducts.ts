import { TypedDocumentNode, gql } from "@apollo/client";
import { Products } from "@ecommerce/types";

export const GET_PRODUCTS: TypedDocumentNode<Products> = gql`
  query GetProducts {
    products {
      title
      description
      manufacturer {
        name
      }
    }
  }
`;
