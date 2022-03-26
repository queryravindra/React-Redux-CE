import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../15.redux/18.index'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     prop: state.prop
//   }
// }

// the state from the redux store is mapped to our component props
// Apart from props whatever the container is receiving it will now receive additional props called numOfcakes
// which reflex numOfCakes in the redux store
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

// const const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

// similarly mapDispatchToProps will basically map our dispatch of an action creator to prop in our component

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

// export default CakeContainer;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);


// Selectors basically return some state information from redux store

// when you want to access redux state in your component you define the mapStateToProps() function
// It gets redux state as a parameter which can be used to retrive the appropriate state properties
// In our case we map state.numOfCakes to a prop called numOfCakes which will then render in the JSX

// llry for dispatching actions we have the mapDispatchToProps() function
// this function gets dispatch method as a parameter and allows us to map action creators to props in our component
// in our example we map dispatch(buyCake()) to a prop called buyCake, this allows us to call buyCake() as props.buycake()

// This is all possible becz of connect function from react-redux
// connect function connects react component to redux store,in our case it connects CakeContainer to redux store