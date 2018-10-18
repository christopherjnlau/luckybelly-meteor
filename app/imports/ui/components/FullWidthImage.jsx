import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src = 'http://luckybelly.com/img/bellybowl.jpg' fluid/>
    );
  }
}