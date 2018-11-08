import { CollectionView, Composite, Button } from 'tabris';
import { component, getById, ComponentJSX  } from 'tabris-decorators';
import { ACTION_REMOVE_ITEM } from '../store/actions';
import store, { RootState } from '../store';
import { Store } from 'redux';

@component
export default class TodoItems extends Composite {
    @getById
    private items: CollectionView;

    private store: Store<RootState, any>; 
    private jsxProperties: ComponentJSX<this>;
 
    constructor(properties: Partial<TodoItems>) {
        super(properties);
        this.store = store;
        this.append(
            <collectionView
            id='items'
            left={0}
            top='prev() 20'
            bottom={0}
            right={0}
            itemCount={this.store.getState().items.length}
            cellType={(index: number) => index.toString()}
            createCell={cellType => {
                return new Composite().append(
                    <textView centerX={0} text='' alignment='center'/>,
                    <button text='x' left='prev() 10' onSelect={() => 
                        this.store.dispatch({type: ACTION_REMOVE_ITEM, index: parseInt(cellType)})
                    }/>
                );
            }}
            updateCell={(cell, index) => {
                cell.apply({
                    TextView: {
                        text: this.store.getState().items[index]
                    }
                });
            }}/>
        );
        this.store.subscribe(() => {
            this.items.load(this.store.getState().items.length);
        });
    }
}