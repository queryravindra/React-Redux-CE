import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../15.redux/18.index'

function HooksCakeCounter() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
      <div>
          <h2>Num of cakes - {numOfCakes}</h2>
          <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
  );
}

export default HooksCakeCounter;

// useSelector() is a hook the react-redux provides, which acts as a close equivalent to the mapStateToProps() function
// we have already seen

// so to get hold of any state that is maintained in the redux store we use useSelector() hook

// useSelector() hook accepts a function as its parameter and this function is called as selector function
// the selector function receives the redux state as its argument
// the use Selector() hook basically returns whatever is returned by this selector function



// useDispatch() hook which is used to dispatch an action with react-redux
// the useDispatch() Hook returns a reference to the Dispatch() function from the redux store
// lets save that reference in a variable called dispatch
// this variable can now used to dispatch actions as needed

// But there are some warnings when using react-redux with Hooks(start exploring..)