import React from 'react';
//import {TiTrash } from "react-icons/ti";
import { GiFishBucket } from "react-icons/gi";
	

function Delete({ fishId, onDelete }) {
  
  
  return (
    <div>
      <GiFishBucket  onClick={() => onDelete(fishId)} />
            
    </div>
  );
}


	
export default Delete;
