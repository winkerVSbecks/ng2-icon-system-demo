import { Component } from '@angular/core';
import { iconTypes } from './icon-types';
import '../styles/index.css';

@Component({
  selector: 'rio-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  iconTypes: any[];

  constructor() {
    this.iconTypes = iconTypes.map(icon => ({
      type: icon.type,
      name: icon.name,
      color: getRandomColor(),
    }));
  }
}

const colors = ['dark-gray', 'mid-gray', 'gray', 'silver', 'light-silver',
  'moon-gray', 'dark-red', 'red', 'light-red', 'orange', 'gold', 'yellow',
  'purple', 'light-purple', 'dark-pink', 'hot-pink', 'pink', 'light-pink',
  'dark-green', 'green', 'light-green', 'navy', 'dark-blue', 'blue',
  'light-blue', 'lightest-blue', 'washed-red'];
const l = colors.length;

function getRandomColor() {
  return colors[Math.floor(Math.random() * l)];
}
