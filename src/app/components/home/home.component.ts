import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnails: false,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/dentist_1.jpg',
        medium: 'assets/images/dentist_1.jpg',
        big: 'assets/images/dentist_1.jpg'
      },
      {
        small: 'assets/images/dentist_2.jpg',
        medium: 'assets/images/dentist_2.jpg',
        big: 'assets/images/dentist_2.jpg'
      },
      {
        small: 'assets/images/dentist_3.jpg',
        medium: 'assets/images/dentist_3.jpg',
        big: 'assets/images/dentist_3.jpg'
      }
    ];

  }

}
