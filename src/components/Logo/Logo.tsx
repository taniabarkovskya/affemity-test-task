import './Logo.css';

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__image">
        <img className="logo__image-img" src="../../images/logo.svg" alt="Affemity logo" />
      </div>
      <h1 className="logo__title">Affemity</h1>
    </div>
  );
};
