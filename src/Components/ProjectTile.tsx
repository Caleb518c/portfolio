import { FC } from "react";

interface ProjectTileProps {
  imgSrc: string;
  imgAltText: string;
  title: string;
  description: string;
  tagsArray: string[];
}

const ProjectTile: FC<ProjectTileProps> = ({
  imgSrc,
  imgAltText,
  title,
  description,
  tagsArray,
}) => {
  return (
    <div className="projectTile">
      <img src={imgSrc} alt={imgAltText} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <li>{tagsArray[0]}</li>
          <li>{tagsArray[1]}</li>
          <li>{tagsArray[2]}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectTile;
