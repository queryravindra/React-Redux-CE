import './App.css';
import { Provider } from 'react-redux';
import store from './15.redux/17.store';
import Setup from './components/14.Setup';
import CakeContainer from './components/CakeContainer';
import HooksCakeCounter from './components/20.HooksCakeCounter';
import IceCreamCounter from './components/22.IceCreamContainer';
import Newcakecontainer from './components/25.NewCakeContainer';
import ItemContainer from './components/26.ItemContainer';
import UserContainer from './components/28.UserContainer';

// function App() {
//   return (
//     <div className="App">
//     {/* 14.React Redux Setup */}
//       <Setup />
//     {/* 15.Actions */}
//     {/* 16.Reducers */}
//     {/* 17.Store */}
//     {/* 18.Connect */}
//     </div>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* 18.Connect */}
        <CakeContainer />
        {/* 20.useSelector Hook */}
        <HooksCakeCounter />
        {/* 21.useDispatch Hook */}
        {/* 22.Cakes and IceCreams */}
        <IceCreamCounter />
        {/* 25.Action Payload */}
        <Newcakecontainer />
        {/* 26.mapState to props */}
        <ItemContainer cake />
        <ItemContainer />
        {/* 29.Redux Thunk Get Request */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

// how does the provider component know about our redux store, well we need to specify that as a prop