/*dependencies*/
import React from 'react';
import { connect } from 'react-redux';
import { Cards } from 'semantic-ui-react';
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
    <div className='ui card'>
        <div clasName='content'>
            <h2 className='header'>{monster.name}</h2>
            <div className='description'>
                <span className='date'>CR: {monster.challenge_rating} </span>
                <span className='date'>Size: {monster.size} </span>
                <span className='date'>HP: {monster.hit_points} </span>

            </div>
        </div>
        <div className='meta'>
                            <div>Alignment: {monster.alignment} </div>
                            <div>Source: {monster.document__title} </div>

</div>
    </div>
    )
}



export default MonsterCard

