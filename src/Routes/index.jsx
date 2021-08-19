import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { routes } from "./routes";

function Routes(){

    return(
        <Router>
            <Navbar>
                <Switch>
                    {
                        routes.map(route =>(
                            <Route path={route.path} key={route.name} exact render={() => <route.component />} />
                        ) )
                    }
                </Switch>
            </Navbar>
        </Router>
    );
};

export default Routes;