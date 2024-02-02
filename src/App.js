import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Components/redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
