export default (state = {}, action) => {
  const { name, brand, description, abv, price, pints, id} = action;
  switch (action.type) {
  case "ADD_KEG":
    return Object.assign({}, state, {
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
  case "DELETE_KEG":
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};