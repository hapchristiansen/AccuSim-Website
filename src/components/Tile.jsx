import React from "react";
import { Link } from "react-router-dom";

function Tile({ title, imageSrc, link }) {
  return (
    <Link to={link} className="tile">
      <div
        className="tile-background"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Tile;
