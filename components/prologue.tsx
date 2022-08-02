import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Prologue: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <div className="prologue">
        <div className="prologue-image">
          <img src="/assets/img/basmallah.png" alt="basmallah.png" />
        </div>
        <div className="prologue-content">
          <div>
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”{" "}
            <strong>(QS. Ar-Rum: 21)</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prologue;
