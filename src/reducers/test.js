/* global expect, it, describe */
import { reducer, initialState } from '.';
import types from '../constants';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('Should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
