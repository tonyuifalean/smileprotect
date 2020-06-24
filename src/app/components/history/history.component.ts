import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from '@app/models';
import { AuthenticationService } from '@app/services';
import { Visit } from '@app/models/visit';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public selected: number;
  public isAdult: boolean;
  public currentUser: User;
  public visits: Visit[];
  public selectedVisits: Visit[];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private authenticationService: AuthenticationService) {
  }


  ngOnInit() {
    this.isAdult = true;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.visits = [{
      id: 1,
      toothId: 11,
      date: '10 January 2020',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 2,
      toothId: 11,
      date: '23 February 2020',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 3,
      toothId: 12,
      date: '11 December 2019',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 4,
      toothId: 12,
      date: '21 December 2019',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 5,
      toothId: 13,
      date: '10 January 2020',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 6,
      toothId: 13,
      date: '23 February 2020',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 7,
      toothId: 14,
      date: '11 December 2019',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 8,
      toothId: 14,
      date: '21 December 2019',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 9,
      toothId: 15,
      date: '10 January 2020',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 10,
      toothId: 15,
      date: '23 February 2020',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 11,
      toothId: 16,
      date: '11 December 2019',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 12,
      toothId: 16,
      date: '21 December 2019',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 13,
      toothId: 17,
      date: '10 January 2020',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 14,
      toothId: 17,
      date: '23 February 2020',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 15,
      toothId: 18,
      date: '11 December 2019',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 16,
      toothId: 18,
      date: '21 December 2019',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 17,
      toothId: 21,
      date: '10 January 2020',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 18,
      toothId: 21,
      date: '23 February 2020',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 19,
      toothId: 22,
      date: '11 December 2019',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 20,
      toothId: 22,
      date: '21 December 2019',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    },
    {
      id: 21,
      toothId: 23,
      date: '10 January 2020',
      description: 'Whitening',
      dentist: 'John Doe'
    },
    {
      id: 22,
      toothId: 23,
      date: '23 February 2020',
      description: 'Cosmetic Braces',
      dentist: 'John Doe'
    }
    ];
  }

  public addHover(event: any) {
    const element = event.target as HTMLElement;
    const parent = this.el.nativeElement.querySelector('.' + element.classList[1] + '-parent');
    this.renderer.addClass(parent, 'hovered');
  }

  public removeHover(event: any) {
    const element = event.target as HTMLElement;
    const parent = this.el.nativeElement.querySelector('.' + element.classList[1] + '-parent');
    this.renderer.removeClass(parent, 'hovered');
  }

  public selectElement(event: any) {
    const element = event.target as HTMLElement;
    const parent = this.el.nativeElement.querySelector('.' + element.classList[1] + '-parent');
    const parentElements = this.el.nativeElement.querySelectorAll('.tooth');
    parentElements.forEach((elem: any) => {
      this.renderer.removeClass(elem, 'selected');
    });
    this.renderer.addClass(parent, 'selected');

    // Mark as selected
    const selectedArr = element.classList[1].split('-');
    this.selected = parseInt(selectedArr[1], 0);
    this.selectedVisits = this.visits.filter((visit: Visit) => visit.toothId === this.selected);
    console.log(this.selectedVisits);
  }
}
