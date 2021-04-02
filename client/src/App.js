import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import ComponentDemo from "./pages/ComponentDemo";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetcherUser";
import ProtectedRoute from "./components/ProtectedRoutes";
import Dogs from "./pages/Dogs";
import Breeds from "./pages/Breeds";


function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/breeds" component={Breeds} />
            <Route exact path="/componentDemo" component={ComponentDemo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
