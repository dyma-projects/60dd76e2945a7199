import { Directive, HostBinding, HostListener } from '@angular/core';

const enum ArrowKey {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirective {
  @HostBinding('style.color') public color;
  @HostListener('window:keydown', ['$event']) windowClick($event) {
    const key: ArrowKey = $event.key;
    switch(key) {
      case ArrowKey.UP:
        this.color = "#e63946";
        break;
      case ArrowKey.DOWN:
        this.color = "#a8dadc";
        break;
      case ArrowKey.LEFT:
        this.color = "#457b9d";
        break;
      case ArrowKey.RIGHT:
        this.color = "#9c6644";
        break;
    }
  }

  constructor() { }

}
