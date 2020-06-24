import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery-9';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  public dentistGalleryOptions: NgxGalleryOptions[];
  public dentistGalleryImages: NgxGalleryImage[];

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
    this.dentistGalleryOptions = [
      {
        image: false,
        height: '100%',
        width: '100%',
        preview: false,
        thumbnailSize: NgxGalleryImageSize.Contain
      }
    ];

    this.dentistGalleryImages = [
      {
        small: 'assets/images/profile_1.png',
        medium: 'assets/images/profile_1.png',
        big: 'assets/images/profile_1.png'
      },
      {
        small: 'assets/images/profile_2.png',
        medium: 'assets/images/profile_2.png',
        big: 'assets/images/profile_2.png'
      },
      {
        small: 'assets/images/profile_3.png',
        medium: 'assets/images/profile_3.png',
        big: 'assets/images/profile_3.png'
      },
      {
        small: 'assets/images/profile_4.png',
        medium: 'assets/images/profile_4.png',
        big: 'assets/images/profile_4.png'
      },
      {
        small: 'assets/images/profile_1.png',
        medium: 'assets/images/profile_1.png',
        big: 'assets/images/profile_1.png'
      },
      {
        small: 'assets/images/profile_2.png',
        medium: 'assets/images/profile_2.png',
        big: 'assets/images/profile_2.png'
      },
      {
        small: 'assets/images/profile_3.png',
        medium: 'assets/images/profile_3.png',
        big: 'assets/images/profile_3.png'
      },
      {
        small: 'assets/images/profile_4.png',
        medium: 'assets/images/profile_4.png',
        big: 'assets/images/profile_4.png'
      },
      {
        small: 'assets/images/profile_1.png',
        medium: 'assets/images/profile_1.png',
        big: 'assets/images/profile_1.png'
      },
      {
        small: 'assets/images/profile_2.png',
        medium: 'assets/images/profile_2.png',
        big: 'assets/images/profile_2.png'
      },
      {
        small: 'assets/images/profile_3.png',
        medium: 'assets/images/profile_3.png',
        big: 'assets/images/profile_3.png'
      },
      {
        small: 'assets/images/profile_4.png',
        medium: 'assets/images/profile_4.png',
        big: 'assets/images/profile_4.png'
      }
    ];
  }

}
