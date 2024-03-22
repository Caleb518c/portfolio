import { FC } from "react";

interface largeSkillTileProps {
  imgSrc: string;
  text: string;
  className: string;
}

const largeSkillTile: FC<largeSkillTileProps> = ({ imgSrc, text, className }) => {
  return (
    <div className={className}>
      <img src={imgSrc}></img>
      <p>{text}</p>
    </div>
  );
};

export default largeSkillTile;
