import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  op1: number = 0;
  op2: number = 0;
  answer = 0;
  onSave() {
    this.answer = this.op1 * this.op2;
  }
}
