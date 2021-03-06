import {increment, decrement, reset} from "./actions/counter";

import store from './store';

//打印初始状态
console.log(store.getState());

//subscribe() 返回一个函数来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

//发起一系列action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

//停止监听state状态
unsubscribe();