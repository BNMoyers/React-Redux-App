/*dependencies*/
import React from 'react';
import { connect } from 'react-redux';
import { Cards } from 'semantic-ui-react';
/*components*/

//shape of data I want on this card: 

/* 
"name": "Adamantine Armor",
"type": "Armor (medium or heavy)",
"desc": "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you’re wearing it, any critical hit against you becomes a normal hit.",
"rarity": "uncommon",
"requires_attunement": ""
*/

const ItemCard = ({ item }) => {
    return(
       <div className='ui card'>
       <div className='content'>
           <h2 className='header'>{item.name}</h2>
           <div className='meta'>
               <span className='date'>type: {item.type}</span>
               <span className='date'>rarity: {item.rarity}</span>

           </div>
           <div className='description'>
               <div>{item.desc}</div>
           </div>
       </div>
       </div> 
    )
}

export default ItemCard