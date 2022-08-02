import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Opening: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <div className="opening">
        <div className="opening-couple">
          <div>The Wedding Of</div>
          <div>
            <div>fulan</div>
            <div>&</div>
            <div>fulanah</div>
          </div>
        </div>
        <div className="date-time">
          <div className="date-time-items">
            <div>Hari</div>
            <div>99</div>
          </div>
          <div className="date-time-items">
            <div>Jam</div>
            <div>99</div>
          </div>
          <div className="date-time-items">
            <div>Menit</div>
            <div>99</div>
          </div>
          <div className="date-time-items">
            <div>Detik</div>
            <div>99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
