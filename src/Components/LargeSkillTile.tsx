import { FC } from "react";

interface largeSkillTileProps {
  imgSrc: string;
  text: string;
}

const largeSkillTile: FC<largeSkillTileProps> = ({ imgSrc, text }) => {
  return (
    <div className="largeSkillTile">
      <img src={imgSrc}></img>
      <p>{text}</p>
    </div>
  );
};

export default largeSkillTile;
