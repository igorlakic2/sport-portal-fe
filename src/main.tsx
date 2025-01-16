import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./auth/AuthProvider.tsx";
import { theme } from "./customTheme";
import "./index.css";
import store from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </StrictMode>
  </ThemeProvider>
);
