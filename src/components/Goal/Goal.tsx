import "./Goal.css";

export const Goal = () => {
  return (
    <div className="goal">
      <h2 className="goal__title">What is your main goal?</h2>
      <div className="goal__options">
        <a href="#" className="goal__options-select">
          Build a deep connection
        </a>
        <a href="#" className="goal__options-select">
          Create emotional attraction
        </a>
      </div>
      <a href="#" className="goal__other">
        Other
      </a>
    </div>
  );
};
