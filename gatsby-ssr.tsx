import * as React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";

import { store } from "./src/store";

interface ReplaceRendererProps {
    bodyComponent: any;
    replaceBodyHTMLString: any;
}

exports.replaceRenderer = (replaceRendererProps: ReplaceRendererProps) => {
    const ConnectedBody = () => (
        <Provider store={store}>
            {replaceRendererProps.bodyComponent}
        </Provider>
    );
    replaceRendererProps.replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
