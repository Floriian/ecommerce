import { TypedDocumentNode, gql } from "@apollo/client";
import { Manufacturers } from "@ecommerce/types";

export const GET_MANUFACTURERS: TypedDocumentNode<Manufacturers> = gql`
  query GetManufacturers {
    manufacturers {
      name
      _id
    }
  }
`;
