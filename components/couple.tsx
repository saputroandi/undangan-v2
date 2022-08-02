import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Couple: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <div className="couple">
        <div className="couple-girl">
          <div className="couple-girl-image">
            <img src="/assets/img/default.jpg" alt="image_here.jpg" />
          </div>
          <div className="couple-girl-details">
            <div className="girl-name">fulanah</div>
            <div className="girl-parent">
              <div className="father">ayah fulanah</div>
              <div className="mother">ibu fulanah</div>
            </div>
          </div>
        </div>
        <div className="couple-and">&</div>
        <div className="couple-boy">
          <div className="couple-boy-image">
            <img src="/assets/img/default.jpg" alt="image_here.jpg" />
          </div>
          <div className="couple-boy-details">
            <div className="boy-name">fulan</div>
            <div className="boy-parent">
              <div className="father">ayah fulan</div>
              <div className="mother">ibu fulan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
