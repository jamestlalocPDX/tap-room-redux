export default (state = {}, action) => {
  switch (action.type) {
  case "ADD_KEG":
    const { name, brand, description, abv, price, pints, id} = action;
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
  default:
    return state;
  }
};