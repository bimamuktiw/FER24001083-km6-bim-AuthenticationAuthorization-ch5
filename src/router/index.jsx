import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export default function Routings() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/detail/:id" exact>
        <DetailPage />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
    </Switch>
  );
}
