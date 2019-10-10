/*dependencies*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

/*components*/
import ItemCard from './ItemCard';
import { fetchItems } from '../../actions';

const ItemList = props => {
    useEffect(() =>{
        props.fetchItems();
    },[]);
     
     
     if(props.isFetching){
         
         return(
             <div class="ui segment">
   <div class="ui active inverted dimmer">
     <div class="ui mini text loader">Fetching Items...</div>
   </div>
  
 </div>
         )
     }
    
    return(
        <section className='location-list grid-view'>this is the item list</section>
    )
}
const mapStateToProps = state => {
    console.log(state, 'state')
     return {
         items: state.items,
         isFetching: state.isFetching,
         error: state.error
     }
 }

export default connect(mapStateToProps,{ fetchItems })(ItemList)