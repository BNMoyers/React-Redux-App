/*dependencies*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

/*components*/
import ItemCard from './ItemCard';
import { fetchItems } from '../../actions';

const ItemList = props => {
   console.log('items',props)
    useEffect(() =>{
       props.fetchItems();
   },[]);
    
    
    if(props.isFetching){
        //spinner
        return(
            <div class="ui segment">
  <div class="ui active inverted dimmer">
    <div class="ui mini text loader">Fetching Items...</div>
  </div>

</div>
        )
    }
    return (
        <section className='character-list grid-view'>
            <Grid centered columns={3}>
            {props.error && <p>{props.error}</p>}
            {props.items.filter(item => item.desc.includes('curse')).map(item => (
            <Grid.Column width={5}>
                <ItemCard key={item.name} item={item} />
            </Grid.Column>
            ))}</Grid>
        </section>
    );
      
} 
const mapStateToProps = state => {
  
    return {
        items: state.items,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{ fetchItems })(ItemList)
