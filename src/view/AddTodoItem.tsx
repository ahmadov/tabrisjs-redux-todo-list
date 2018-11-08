import { Page, TextInput, Composite } from "tabris";
import store, { RootState } from '../store';
import { component, getById, ComponentJSX  } from "tabris-decorators";
import { ACTION_ADD_ITEM } from "../store/actions";
import { Store } from "redux";

@component
export default class AddTodoItem extends Composite {
    @getById
    private newItem: TextInput;
    private store: Store<RootState, any>;
    private jsxProperties: ComponentJSX<this>;
 
    constructor(properties: Partial<AddTodoItem>) {
        super(properties);
        this.store = store;
        this.append(
            <composite top={10}>
                <textInput id='newItem' message='Enter new todo item'/>
                <button
                text='Add to todo items'
                left='prev() 10'
                onSelect={() => {
                    if (this.newItem.text.trim() !== '') {
                        this.store.dispatch({type: ACTION_ADD_ITEM, newItem: this.newItem.text.trim()});
                        this.newItem.text = '';
                    }
                }}/>
            </composite>
        );
    }
}