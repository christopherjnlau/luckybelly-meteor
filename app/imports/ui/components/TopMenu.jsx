import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <div className='top'>
          <Menu white relaxed borderless secondary>
            <Menu.Item><Image src='http://www.luckybelly.com/img/lucky-logo-light.png' right inline /></Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>Menus</Menu.Item>
              <Menu.Item>Info</Menu.Item>
              <Menu.Item>Breaking Bread Hospitality</Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
    );
  }
}