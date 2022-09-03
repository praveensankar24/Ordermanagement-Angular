import { Component, Input, OnInit } from '@angular/core';
interface carouselimage{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
@Input() images:carouselimage[]=[]
@Input() indicators=true;
@Input() controls=true;
@Input() autoSlide=false;
@Input() slideInterval=3000; //default to 3 second
selectedindex=0;
  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideimages();
    }
  }
  //change slide every 3 second
  autoSlideimages():void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval);
  }
  //set image of dot indicate
  selectimage(index:number):void{
    this.selectedindex=index;
  }

  onNextClick():void{
    if(this.selectedindex===this.images.length-1){
      this.selectedindex=0;

    }else{
      this.selectedindex++;
    }
  }
}
