import { Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { msToTime } from "../Timer/api";

const Googlestop = ({watch}) => {
 

  return (
    <div>
      <Text color='black' fontSize={"20px"}>{msToTime(watch)}</Text>
      {/* <button >
        {!watch ? "start" : "stop"}
      </button> */}
      {/* <button onClick={pause}>pause</button> */}
      {/* <button onClick={reset}>reset</button> */}
    </div>
  );
};

export default Googlestop;
