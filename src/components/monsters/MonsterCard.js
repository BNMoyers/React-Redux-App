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

const MonsterCard = props => {
    return(
    <div>
        this will hold my card data
    </div>
    )
}

const mapStateToProps = state => {
    return {
        Monster:{
            n
        }
    }
}

export default connect(mapStateToProps,{})(MonsterCard)

