import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HashRouter >
          <App />
        </HashRouter>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>
);
