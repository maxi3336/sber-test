import { Route, Switch } from "react-router"
import { Edit } from "../../pages/Edit"
import { Main } from "../../pages/Main"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/main" >
                <Main />    
            </Route>
            <Route exact path="/edit">
                <Edit />
            </Route>
        </Switch>
    )
}