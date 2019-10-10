/*dependencies*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';


/*components*/
import MonsterCard from './MonsterCard';
import { fetchMonsters } from '../../actions';

const MonsterList = props => {
   console.log(props)
    useEffect(() =>{
       props.fetchMonsters();
   },[]);
    
    
    if(props.isFetching){
        //spinner
        return <h2> loading state </h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.monsters.map(monster => (
                <MonsterCard key={monster.name} monster={monster} />
            ))}
        </div>
    );
      
} 
const mapStateToProps = state => {
   console.log(state, 'state')
    return {
        monsters: state.monsters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{ fetchMonsters })(MonsterList)
