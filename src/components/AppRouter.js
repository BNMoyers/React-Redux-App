/*dependencies*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*components*/
import LandingPage from './LandingPage';
import MonsterList from './monsters/MonsterList';
import ItemList from './items/ItemList';
import SpellList from './spells/SpellList';

export default function AppRouter() {
    return <div className='page-view ui bottom attached segment active tab'>
                <Switch>
                    <Route path='/monsters' component={MonsterList} />
                    <Route path='/items' component={ItemList} />
                    <Route path='/spells' component={SpellList} />

                </Switch>
    </div>
}

