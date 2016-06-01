import {Component} from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  moduleId: module.id,
  selector: 'material2-do-app',
  directives: [DialogComponent],
  templateUrl: 'material2-do.component.html',
  styleUrls: ['material2-do.component.css']
})
export class Material2DoAppComponent {
  title = 'material2-do works!';

  log(text) {
    console.log(text);
  }
}
