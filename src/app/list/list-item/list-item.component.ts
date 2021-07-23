import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ListItem } from '../list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: ListItem;
  @Output() statusChanged: EventEmitter<ListItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeStatus() {
    this.item.status = 'done';
    this.statusChanged.emit(this.item);
  }

}
