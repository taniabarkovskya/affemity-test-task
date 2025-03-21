import "./OptionsList.css";
import { OptionCard } from "../OptionCard";
import { MainButton } from "../MainButton";
import { useState } from "react";
import { Option } from "../../types/Option";
import { useNavigate } from "react-router-dom";

type Props = {
  options: Option[];
};

export const OptionsList: React.FC<Props> = (props) => {
  const { options } = props;

  const [currentOptions, setCurrentOptions] = useState(options);

  const navigate = useNavigate();

  const handleCheck = (title: string) => {
    setCurrentOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.title === title ? { ...option, checked: !option.checked } : option
      )
    );
  };

  const isAnyChecked = currentOptions.some((option) => option.checked);

  const handleContinue = () => {
    if (isAnyChecked) {
      navigate("/confirmation");
    }
  };

  return (
    <div className="options-list">
      <div className="options-list__list">
        {currentOptions.map((option) => (
          <OptionCard key={option.title} option={option} onCheck={handleCheck} />
        ))}
      </div>
      <div className="options-list__button">
        <MainButton isDisabled={!isAnyChecked} onClick={handleContinue}>Continue</MainButton>
      </div>
    </div>
  );
};
