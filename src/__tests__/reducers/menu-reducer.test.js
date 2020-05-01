import menuReducer from '../../reducers/menuReducer-reducer';

describe('menuReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(menuReducer({}, { type: null })).toEqual({});
  });
});