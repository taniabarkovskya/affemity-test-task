import "./ConfirmationForm.css";
import { useState } from "react";
import { MainButton } from "../MainButton";
import { throttle } from "../../utils/throttle";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const ConfirmationForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    if (!email) {
      return "Email is required";
    }

    if (!email.includes("@")) {
      return "Email must include '@'";
    }

    return "";
  };

  const throttledHandleEmailChange = throttle((newEmail: string) => {
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  }, 500);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validateEmail(email);
    setEmailError(error);

    if (error) return;

    navigate("/results");
    setEmail("");
  };

  return (
    <form
      className="confirmation-form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="confirmation-form__input">
        <input
          type="text"
          value={email}
          onChange={(event) => throttledHandleEmailChange(event.target.value)}
          className={classNames("confirmation-form__input-field", {
            "confirmation-form__input-field--has-error": emailError,
          })}
          placeholder="example@gmail.com"
        />
        {emailError && (
          <span className="confirmation-form__input-error">{emailError}</span>
        )}
      </div>

      <MainButton type="submit">Get results</MainButton>
    </form>
  );
};
