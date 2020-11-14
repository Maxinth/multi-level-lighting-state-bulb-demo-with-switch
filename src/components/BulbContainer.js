import React, { useState } from "react";
import Bulb from "./Bulb";

const BulbContainer = () => {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  // to turn lights off
  const resetCount = () => {
    setCount(1);
  };
  return (
    <Bulb
      lightSteps={count}
      clickAction={handleClick}
      resetCount={resetCount}
    />
  );
};

export default BulbContainer;

/*
 count is initially set as 1 so, the Room component that uses its 
incremental value can proceed to the "low" state without having to 
click the light level button twice  as count = 0 gives this effect.

*/
