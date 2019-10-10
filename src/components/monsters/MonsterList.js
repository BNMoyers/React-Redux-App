/*dependencies*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

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
        return(
            <div class="ui segment">
  <div class="ui active inverted dimmer">
    <div class="ui mini text loader">Fetching Monsters...</div>
  </div>
  <p></p>
  <p></p>
  <p></p>
</div>
        )
    }
    return (
        <section className='caracter-list grid-view'>
            <Grid centered columns={3}>
            {props.error && <p>{props.error}</p>}
            {props.monsters.map(monster => (
            <Grid.Column width={5}>
                <MonsterCard key={monster.name} monster={monster} />
            </Grid.Column>
            ))}</Grid>
        </section>
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
