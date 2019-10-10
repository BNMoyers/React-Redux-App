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
       <div>{item.name}</div> 
    )
}

export default ItemCard