import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  currentImage = '';
  currentImageIndex: number = 0;
  images: any;
  tabs = [
    $localize`First Week`,
    $localize`Second Week`,
    $localize`Third Week`,
    $localize`Fourth Week`,
  ];
  imagess = [
    {
      url: 'https://i0.wp.com/s3.amazonaws.com/vasuraj/web/wp-content/uploads/2017/06/23064908/rath-yatra-photos-t10-min.jpg?fit=1920%2C1200&ssl=1',
    },
    {
      url: 'https://back2godhead.com/wp-content/uploads/2012/11/103_1975_10-07-9.jpg',
    },
    {
      url: 'https://images.rove.me/w_1920,q_85/x2wp29k5n8rjzvtm0vao/india-rath-yatra.jpg',
    },
    {
      url: 'https://i1.wp.com/www.grs.com.sg/wp-content/uploads/2016/06/Ratha-Yatra.jpg?fit=750%2C370',
    },
    {
      url: 'https://www.gopinathgaudiyamath.com/wp-content/uploads/2021/07/puri-rath-yatra-2021-1068x712.jpg',
    },
    {
      url: 'https://meravote.org/wp-content/uploads/2020/06/rath-yatra.jpg',
    },
    {
      url: 'https://images.hindustantimes.com/img/2021/07/12/1600x900/puri-rath-yatra-festival_1f8969f6-b627-11ea-b8d7-dab47869eae4_1626048824614.jpg',
    },
    {
      url: 'https://www.iskconbangalore.org/blog/wp-content/uploads/2020/01/Ratha-Yatra-2016-2-1024x680.jpg',
    },
    {
      url: 'https://images.indianexpress.com/2017/06/rath-yatra_759.jpg?w=759&h=422&imflag=true',
    },
    {
      url: 'https://www.clickodisha.odialive.com/wp-content/uploads/2012/06/Ratha-Yatra-2012-22.jpg',
    },
    {
      url: 'http://www.mylaporetimes.com/wp-content/uploads/2014/01/ISKCON-ratha-yatra.jpg',
    },
    {
      url: 'https://medialit.in/thevoices/wp-content/uploads/2021/07/rath-yatra-2021-1626059955.jpg',
    },
  ];
  nextImage() {
    if (this.images.length !== this.currentImageIndex + 1) {
      this.currentImage = this.images[this.currentImageIndex + 1].url;
      this.currentImageIndex = this.currentImageIndex + 1;
    }
  }
  previousImage() {
    if (this.currentImageIndex !== 0) {
      this.currentImage = this.images[this.currentImageIndex - 1].url;
      this.currentImageIndex = this.currentImageIndex - 1;
    }
  }
}
