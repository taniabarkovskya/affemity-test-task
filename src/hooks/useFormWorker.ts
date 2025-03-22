import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThrottleEffect } from "./useThrottleEffect";

interface UseFormWorkerProps {
  initialEmail?: string;
}

const DELAY = 500;

export const useFormWorker = ({ initialEmail = "" }: UseFormWorkerProps) => {
  const [email, setEmail] = useState(initialEmail);
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

  useThrottleEffect(
    () => {
      setEmailError(validateEmail(email));
    },
    [email],
    DELAY
  );

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validateEmail(email);
    setEmailError(error);

    if (error) return;

    navigate("/results");
    setEmail("");
  };

  return {
    email,
    emailError,
    handleEmailChange,
    handleSubmit,
  };
};
