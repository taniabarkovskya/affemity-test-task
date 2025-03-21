import "./ResultsPage.css";
import { Logo } from "../../components/Logo";

export const ResultsPage = () => {
  return (
    <div className="results">
      <div className="results__content">
        <Logo />
        <h2 className="results__content-title title">
          We are crafting your personalized plan
        </h2>
      </div>
    </div>
  );
};
