import React from "react";
import {NavLink} from 'react-router-dom';

export default function Navigator() {
    return(
    <div>
        <ul>
            <li> 
                <NavLink to= '/'>Home</NavLink>
            </li>
        
            <li>
                <NavLink to= '/notes'>Notes</NavLink>
            </li>
        </ul>
    </div>
    );
  }
  