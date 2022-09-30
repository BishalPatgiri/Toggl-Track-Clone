import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
const Rangetimer = ({date,setDate}) => {


  return (
    <div style={{position:'absolute',top:"20%",right:"10px",border:"1px solid grey",padding:"10px",borderRadius:"8px",backgroundColor:"white"}}>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
      />
      ;
    </div>
  );
}

export default Rangetimer



