import { Component, OnInit } from '@angular/core';
import { ListItem } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {
    
  }

  ngOnInit() {
    
  }

  onStatusChange(item: ListItem) {
    this.listService.updateState(item);
  }

}
