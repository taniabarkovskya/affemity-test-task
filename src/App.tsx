import "./App.css";

function App() {
  return (
    <main className="container">
      <div className="logo">
        <div className="logo__image">
          <img
            className="logo__image-img"
            src="/logo.svg"
            alt="Affemity logo"
          />
        </div>
        <h1 className="logo__title">Affemity</h1>
      </div>
      <div className="welcome">
        <h2 className="welcome__title">Change your <span className="highlighted">love life</span></h2>
        <p className="welcome__text">with easy-to-use practical tips that you can apply in any situation</p>
      </div>
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
      <p className="rights">
        By continuing, you agree to our Terms of Service | Privacy Policy
        <br />
        2024 © All Rights Reserved.
      </p>
    </main>
  );
}

export default App;
