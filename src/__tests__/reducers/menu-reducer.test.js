import menuReducer from "../../reducers/menu-reducer";

describe("menuReducer", () => {

  const currentState = {
    1: {
      name: "Manta Ray",
      brand: "Ballast Point",
      description: "It's so damn good!",
      abv: "8%",
      price: "$12.99",
      pints: "124",
      id: 1 },
    2: {
      name: "Victory at Sea",
      brand: "Ballast Point",
      description: "It's delicious!",
      abv: "10%",
      price: "$12.99",
      pints: "124",
      id: 2 }
  };

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
    });
  });

  test("Should successfully delete a keg", () => {
    const { name, brand, description, abv, price, pints, id} = currentState;
    action = {
      type: "DELETE_KEG",
      id: 1
    };
    expect(menuReducer(currentState, action)).toEqual({
      2: {
        name: "Victory at Sea",
        brand: "Ballast Point",
        description: "It's delicious!",
        abv: "10%",
        price: "$12.99",
        pints: "124",
        id: 2 }
    });
  });
}); 