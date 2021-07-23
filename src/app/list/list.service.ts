import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItem } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list$: BehaviorSubject<ListItem[]> = new BehaviorSubject([]);
  list: ListItem[] = [];

  constructor() {
    this.list$.subscribe((data) => {
      this.list = data;
    })
  }

  add(listItem: ListItem) {
    this.list.push(listItem);
    this.list$.next(this.list);
  }

  updateState(listItem: ListItem) {
    const newList = [
      ...this.list,
      listItem
    ];

    this.list$.next(newList);
  }
}
