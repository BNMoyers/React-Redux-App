import React from 'react';
import { connect } from 'react-redux';
import { Cards } from 'semantic-ui-react';
//shape of data I want on this card: 

/* 
 "name": "Acid Arrow",
            "desc": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
            "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
            "page": "phb 259",
            "range": "90 feet",
            "components": "V, S, M",
            "material": "Powdered rhubarb leaf and an adder's stomach.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "casting_time": "1 action",
            "level": "2nd-level",
            "level_int": 2,
            "school": "Evocation",
            "dnd_class": "Druid, Wizard",
*/

const SpellCard = ({ spell }) => {
    return(
        <div className='ui card'>
       <div className='content'>
           <h2 className='header'>{spell.name}</h2>
           <div className='meta'>
               <span className='date'>{spell.level}</span>
               <span className='date'>can cast: {spell.dnd_class}</span>
                <br/>
               <span className='date'>source page: {spell.page}</span>


           </div>
           <div className='description'>
               <div>{spell.desc}</div>
           </div>
       </div>
       </div> 
    )
}

export default SpellCard