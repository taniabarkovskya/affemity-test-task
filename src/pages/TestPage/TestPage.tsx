import "./TestPage.css";
import { useGoal } from "../../hooks/useGoal";
import { Back } from "../../components/Back";
import { Logo } from "../../components/Logo";
import { OptionsList } from "../../components/OptionsList";
import { Option } from "../../types/Option";

export const TestPage = () => {
  const { goal } = useGoal();

  const options: Option[] = [
    { title: `Skill1_${goal}`, icon: "/skill1_img.svg", checked: false },
    { title: `Skill2_${goal}`, icon: "/skill2_img.svg", checked: false },
    { title: `Skill3_${goal}`, icon: "/skill3_img.svg", checked: false },
    { title: `Skill4_${goal}`, icon: "/skill4_img.svg", checked: false },
    { title: `Skill5_${goal}`, icon: "/skill5_img.svg", checked: false },
  ];

  return (
    <div className="test">
      <div className="test__header">
        <div className="test__heading">
          <Back />
          <Logo />
          <div className="quantity">
            1<span className="quantity__all">/34</span>
          </div>
        </div>
        <div className="test__question">
          <h2 className="test__question-title title">
            What would you like to learn?
          </h2>
          <div className="test__question-subtitle">Select all that apply</div>
        </div>
      </div>
      <div className="test__list">
        <OptionsList options={options} />
      </div>
    </div>
  );
};
