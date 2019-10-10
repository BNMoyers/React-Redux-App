import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
    <NavLink exact  
            {...props}
            activeClassName='active'
            />
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const homeLabel = createLabel('home', 'Home Page');
const monsterLabel = createLabel('users', 'Monsters');
const itemLabel = createLabel('home', "Magic Items");
const spellLabel = createLabel('home', "Spells");

const panes = [
    { menuItem: <Menu.Item key='home' as={Nav} to={'/'} content={homeLabel} /> },
    { menuItem: <Menu.Item key='monsters' as={Nav} to={'/monsters'} content={monsterLabel} /> },
    { menuItem: <Menu.Item key='items' as={Nav} to={'/items'} content={itemLabel} /> },
    { menuItem: <Menu.Item key='spells' as={Nav} to={'/spells'} content={spellLabel} /> },

]

const NavTabs = () => <Tab panes={panes} renderActiveOnly={false} />

export default NavTabs