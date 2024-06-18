import { createStore } from 'redux';
import { reducer } from './reducer';
import { type } from '@testing-library/user-event/dist/type';

export let store = createStore (reducer);

store.dispatch({type: 'INITIAL', payload:{"i": 1, "j": 1}});