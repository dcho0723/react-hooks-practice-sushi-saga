import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushiData }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  // console.log(sushiData)
  const eachSushi = sushiData
    .slice(sushiIndex, sushiIndex + 4)
    .map(sushi => {
    return <Sushi key={sushi.id} name={sushi.name} image={sushi.img_url} price={sushi.price}/>})

    function moreSushiClick() {
      setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushiData.length)
    }

  return (
    <div className="belt">
      {eachSushi}
      <MoreButton moreSushiClick={moreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
