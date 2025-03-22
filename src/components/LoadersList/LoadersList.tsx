import "./LoadersList.css";
import { useState } from "react";
import { LoaderTitle } from "../../types/LoaderTitle";
import { Loader } from "../Loader/Loader";

type Props = {
  loadersTitles: LoaderTitle[];
};

export const LoadersList: React.FC<Props> = (props) => {
  const { loadersTitles } = props;

  const [currentLoader, setCurrentLoader] = useState(1);

  const handleNextLoader = () => {
    if (currentLoader < loadersTitles.length) {
      setCurrentLoader((prev) => prev + 1);
    }
  };

  return (
    <div className="loaders-list">
      {loadersTitles.map((loaderTitle) => (
        <Loader
          key={loaderTitle.id}
          loaderTitle={loaderTitle}
          isActive={loaderTitle.id === currentLoader}
          onComplete={handleNextLoader}
        />
      ))}
    </div>
  );
};
