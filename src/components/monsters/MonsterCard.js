/*dependencies*/
import React from 'react';
import { connect } from 'react-redux';
/*components*/

//shape of data I want on this card: 

/* 
"name": "Aatxe",            
"challenge_rating": "5",
"size": "Large",
"alignment": "lawful good",
"hit_points": 105,
            
*/

const MonsterCard = ({ monster }) => {
    console.log('card props', monster)
    return(
    <div>
        {monster.name}
    </div>
    )
}



export default MonsterCard

