import { property } from 'tabris-decorators';
import { getPropertyStore } from 'tabris-decorators/internals/utils';

export function select(selector?: string) {
    return (target: any, key: string) => {
        if (delete target[key]) {
            Object.defineProperty(target, key, {
                get(this: any) {
                    const state = this.store.getState();
                    if (typeof state[selector] !== "undefined") {
                        return state[selector];
                    }
                    throw new Error(`Could not find state property ${selector}`);
                },
                enumerable: true,
                configurable: true
            });
        }
    }    
}

export function propertySelect(selector?: string) {
    return (target: any, key: string) => {
        if (delete target[key]) {
            Object.defineProperty(target, key, {
                enumerable: true,
                configurable: true
            });
        }
    }
}