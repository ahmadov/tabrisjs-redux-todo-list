import { createStore } from 'redux';
import { ACTION_ADD_ITEM, ACTION_REMOVE_ITEM } from './actions';

export interface RootState {
    items: string[]
}

const reducer = (state: RootState, action: any) => {
    let items = state.items;
    switch (action.type) {
        case ACTION_ADD_ITEM:
          items.push(action.newItem);
          return Object.assign({}, state, {
            items
          });
        case ACTION_REMOVE_ITEM:
          items.splice(action.index, 1);
          return Object.assign({}, state, {
            items
          });
        default:
          return state;
      }
};

const initialState: RootState = {
  items: []
};
  ​
let store = createStore(reducer, initialState);

export default store;
