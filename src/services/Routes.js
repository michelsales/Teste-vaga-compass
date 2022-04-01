import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import Details from "../pages/Details";

const Routes = () => {
    
   return(
    <BrowserRouter>
        <Route exact path="/">
            <Main/>
        </Route>
        <Route path="/:login" >
            <Details/>
        </Route>
    </BrowserRouter>
   )
}

export default Routes;