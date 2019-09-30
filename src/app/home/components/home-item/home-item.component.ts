import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Home } from '../../models/home.model';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent{
  @Input() home: Home;
  @Output() done = new EventEmitter<Home>();
  @Output() update = new EventEmitter<Home>();
  @Output() delete = new EventEmitter<Home>();
}
