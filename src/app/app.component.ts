import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private listService: ListService) {
    this.todoForm = this.fb.group({
      title: ['']
    })
  }

  submit() {
    this.listService.add({
      title: this.todoForm.value.title,
      status: 'todo'
    })
  }
}
