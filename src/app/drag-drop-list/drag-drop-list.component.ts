import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss']
})
export class DragDropListComponent {
  
 
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done: any[] = [
 
  ];

  done1 : any[] =[]


  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
     else {
      
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex,event.currentIndex);
    }
  }
  drop1(event: CdkDragDrop<string[]>) {
         if(event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
     else {
      
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex,event.currentIndex);
    }
  }


}

