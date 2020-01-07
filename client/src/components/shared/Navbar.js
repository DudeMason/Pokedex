import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        <Icon name='blue globe'/>
        Home
      </Menu.Item>
    </Link>
    <Link to='/pokedex'>
      <Menu.Item>
        <Icon name='red heartbeat'/>
        Pokedex
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
      <Icon name='green question circle outline'/>
        About
      </Menu.Item>
    </Link>
  </Menu>

)

export default Navbar;
