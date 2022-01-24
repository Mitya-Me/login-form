import { useContext } from "react";
import { AuthContext } from "../../context";
import { Switch, Route} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../route";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const AppRouter = (): JSX.Element => {
	const { auth } = useContext(AuthContext);

    return auth ? (
        <Switch>
            {privateRoutes.map(({ path, component, exact }) => (
				<Route key={`${component}`} path={path} exact={exact} component={component} />
			))}
			<Route  component={NotFoundPage} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, component, exact }) => (
                <Route key={`${component}`} path={path} exact={exact} component={component} />
			))}
			<Route component={NotFoundPage}/>
        </Switch>
    );
};
