import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './ToDos/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavComponent from './Nav/Nav';
import HomeComponent from './Example/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavComponent />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <MyComponent /> */}
          {/* <ListToDo /> */}
          {/* <HomeComponent /> */}
          <Switch>
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
