import { StrictMode } from "react";
import App from "./App.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TestPage } from "./pages/TestPage";
import { ResultsPage } from "./pages/ResultsPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

export const Root = () => {
  return (
    <StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<WelcomePage />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="test" element={<TestPage />} />
              <Route path="confirmation" element={<ConfirmationPage />} />
              <Route path="results" element={<ResultsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
    </StrictMode>
  );
};
