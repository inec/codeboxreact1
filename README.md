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

```
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});
```
```
case ADD_NOTE:
      return action.text;
      // change code below this line
  return {
    type: ADD_NOTE,
    text: note
  };
  // change code above this line
```
