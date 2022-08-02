import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Akad: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <div className="akad">
        <div className="times-section">
          <div>Pukul:</div>
          <div>08:00 - 09:00 WIB</div>
        </div>
        <div className="days-section">
          <div>Ahad</div>
          <div>
            <div>07</div>
            <div>2022</div>
          </div>
          <div>Maret</div>
        </div>
        <div className="place-section">
          <div>Lokasi acara:</div>
          <div>Masjid</div>
          <div>Kembangan - Jakarta Barat</div>
        </div>
      </div>
    </div>
  );
};

export default Akad;
