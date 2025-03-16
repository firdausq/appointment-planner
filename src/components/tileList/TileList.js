import React from "react";
import { Tile } from "../../components/tile/Tile.js"

export const TileList = ({ items }) => {
  const newArray = items.map(
    ( element, index ) => { const {name, ...description} = element;
    return <Tile key={index} name={name} description={description} /> }
  );

  return (
    <div>
      {newArray}
    </div>
  );
};
