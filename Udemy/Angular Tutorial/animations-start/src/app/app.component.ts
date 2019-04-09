import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(1000)),
      // transition('highlighted => normal', animate(1000)),
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(500)),
      transition('highlighted => normal', animate(1000)),
      transition('shrunken <=> *', [
        animate(500),
        animate(2000, style({
          'background-color': 'orange',
          borderRadius: '50px'
        })),
        animate(1000, style({
          // borderRadius: '50px'
        })),
        animate(1500)
      ]),
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ]),
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(3000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-75px)',
            opacity: 0.75,
            backgroundColor: 'blue',
            color: 'white',
            offset: 0.2
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            backgroundColor: 'red',
            color: 'yellow',
            offset: 0.5
          }),
          style({
            transform: 'translateX(-10px)',
            opacity: 1,
            backgroundColor: 'yellow',
            color: 'grey',
            offset: 0.75
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            backgroundColor: 'white',
            color: 'black',
            offset: 1
          }),
        ]))
      ]),
      transition('* => void', [
        group([
          animate(1000, style({
            color: 'red',
          })),
          animate(2000, style({
            opacity: 0,
            transform: 'translateX(100px)'
          })),
        ]),
      ]),
    ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrink() {
      this.wildState = 'shrunken';
    }

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

    animationsStarted(event) {
      console.log(event);
    }

    animationsEnded(event) {
      console.log(event);
    }
}
