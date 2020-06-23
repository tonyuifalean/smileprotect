import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public selected: string;
  public isAdult: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {
      this.selected = '';
      this.isAdult = true;
  }


  ngOnInit() {
  }

  public addHover(event: any) {
    const element = event.target as HTMLElement;
    const parent = this.el.nativeElement.querySelector('.' + element.classList[0] + '-parent');
    this.renderer.addClass(parent, 'hovered');
  }

  public removeHover(event: any) {
    const element = event.target as HTMLElement;
    const parent = this.el.nativeElement.querySelector('.' + element.classList[0] + '-parent');
    this.renderer.removeClass(parent, 'hovered');
  }
}
