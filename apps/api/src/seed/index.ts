import mongoose from 'mongoose';
interface FakeStoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
function TSFetch<T>() {
  return fetch(`https://fakestoreapi.com/products`)
    .then((r) => {
      if (!r.ok) {
        throw new Error(r.statusText);
      }

      return r.json() as T;
    })
    .then((data) => {
      return data as T;
    });
}

async function seedData() {
  const data = await TSFetch<FakeStoreApiResponse[]>();

  const manufacturers = data.map((d) => {
    return {
      name: d.title.split(' ')[0],
      image: d.image,
    };
  });

  const manufacturerIds = [];

  for (const manufacturer of manufacturers) {
    try {
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
                    mutation CreateManufacturer($input: CreateManufacturerInput!) {
                        createManufacturer(createManufacturerInput: $input) {
                          _id
                        }
                      }
      
                    `,
          variables: {
            input: {
              name: manufacturer.name,
              image: manufacturer.image,
            },
          },
        }),
      });
      const d = await response.json();
      manufacturerIds.push(d.data.createManufacturer._id);
    } catch (e) {
      console.log(e);
    }
  }

  for (const id of manufacturerIds) {
    for (const product of data) {
      try {
        const response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
                      mutation CreateProduct($input: CreateProductInput!) {
                          createProduct(createProductInput: $input) {
                            _id
                            title
                            image
                            description
                            amount
                            price
                            manufacturer {
                              _id
                              name
                              image
                            }
                          }
                        }
                      `,
            variables: {
              input: {
                title: product.title,
                image: product.image,
                description: product.description,
                amount: 10,
                manufacturerId: id,
                price: product.price,
              },
            },
          }),
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
}

seedData();
