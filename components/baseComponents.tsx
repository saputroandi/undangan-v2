import React from "react";
import Opening from "./opening";

type Props = {
  children?: React.ReactNode;
};

const BaseComponents: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default BaseComponents;
