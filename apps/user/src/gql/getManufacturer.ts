import { TypedDocumentNode, gql } from "@apollo/client";
import { Manufacturer } from "@ecommerce/types";

export const GET_MANUFACTURER: TypedDocumentNode<Manufacturer> = gql`
  query GetManufacturers {
    manufacturers {
      name
      _id
    }
  }
`;
