/*dependencies*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

/*components*/
import SpellCard from './SpellCard';
import { fetchSpells } from '../../actions';

const SpellList = props => {
   console.log(props)
    useEffect(() =>{
       props.fetchSpells();
   },[]);
    
    
    if(props.isFetching){
        //spinner
        return(
            <div class="ui segment">
  <div class="ui active inverted dimmer">
    <div class="ui mini text loader">Fetching Spells...</div>
  </div>

</div>
        )
    }
    return (
        <section className='character-list grid-view'>
            <Grid centered columns={3}>
            {props.error && <p>{props.error}</p>}
            {props.spells.map(spell => (
            <Grid.Column width={5}>
                <SpellCard key={spell.name} spell={spell} />
            </Grid.Column>
            ))}</Grid>
        </section>
    );
      
} 
const mapStateToProps = state => {
    return {
        spells: state.spells,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{ fetchSpells })(SpellList)
