import menuReducer from "../../reducers/menu-reducer";

describe("menuReducer", () => {

  let action;
  const kegData = {
    name: "Manta Ray",
    brand: "Ballast Point",
    description: "It's so damn good!",
    abv: "8%",
    price: "$12.99",
    pints: "124",
    id: 1
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(menuReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new keg data to masterMenu", () => {
    const { name, brand, description, abv, price, pints, id} = kegData;
    action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      description: description,
      abv: abv,
      price: price,
      pints: pints,
      id: id
    }
    expect(menuReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        description: description,
        abv: abv,
        price: price,
        pints: pints,
        id: id
      } 
    })
  })
}); 