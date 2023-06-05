import { useQuery } from "@apollo/client";
import { GET_MANUFACTURER } from "./gql";
import { useEffect } from "react";
import { Manufacturer } from "@ecommerce/types";
function App() {
  const { data, loading, error } = useQuery(GET_MANUFACTURER);

  useEffect(() => console.log(data), [data]);
  return (
    <div className="text-red-500 flex justify-center w-full">
      {data?.manufacturers.map((man) => (
        <p key={man._id}>{man.name}</p>
      ))}
    </div>
  );
}

export default App;
