/*
Original Redux library needs process.env.NODE_ENV which it's not available in Tabris.js Environment.
Thus, the following code is added to make Redux library works properly with Tabris.js
*/
global = Object.assign(global, {
  process: {
    env: {
      NODE_ENV: 'production'
    }
  }
});

import { ui } from 'tabris';
import TodoItems from './view/TodoItems';
import AddTodoItem from './view/AddTodoItem';

ui.contentView.append(
  <AddTodoItem centerX={0} top={0}/>,
  <TodoItems top={50} left={0} right={0} bottom={0}/>
);
