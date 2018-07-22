import * as React from "react";
import * as H from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./src/store";

interface ReplaceRouterComponentProps {
    history: H.History;
}

interface RouterWrapperProps {
    children: React.ReactNode;
}

exports.replaceRouterComponent = (replaceRouterComponentProps: ReplaceRouterComponentProps) => {
    return (routerWrapperProps: RouterWrapperProps) =>
        <Provider store={store}>
            <Router history={replaceRouterComponentProps.history}>
                {routerWrapperProps.children}
            </Router>
        </Provider>;
};
