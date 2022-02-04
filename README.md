# codeboxreact1
```
 if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
```
Use const for Action Types
```
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
```
Register a Store Listener
```
function sayHi() {
  count+=1;
}
store.subscribe(sayHi);
```
