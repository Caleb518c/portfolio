import { FC } from "react";

interface smallSkillTileProps {
  imgSrc: string;
  text: string;
}

const smallSkillTile: FC<smallSkillTileProps> = ({ imgSrc, text }) => {
  return (
    <div className="smallSkillTile">
      <img src={imgSrc}></img>
      <p>{text}</p>
    </div>
  );
};

export default smallSkillTile;
    