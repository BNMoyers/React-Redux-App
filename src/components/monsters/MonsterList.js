/*dependencies*/
import React from 'react';
import { connect } from 'react-redux';


/*components*/
import MonsterCard from './MonsterCard';
import { fetchMonster } from '../..actions'
const MonsterList = props => {
    return(
    <>
        if(props.isFetching){
        //spinner
        return <h2> loading state </h2
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.monsters.map(monster => <MonsterCard monster={monster}/>)}
        </div>
    )
    </>
    )
} 
const mapStateToProps = state => {
    return {
        MonsterList: state.monsters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{})(MonsterList)
