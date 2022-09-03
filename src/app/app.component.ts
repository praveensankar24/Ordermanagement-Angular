import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { RegisterComponent } from './register/register.component';
import { SaveService } from './save.service';
import { __values } from 'tslib';

import { CustomerlistComponent } from './customerlist/customerlist.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';
  images=[
    {
      imageSrc:
        'https://user-images.githubusercontent.com/107386153/184827889-d51d1e10-ead8-44dc-bee6-0a66332d08bf.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://user-images.githubusercontent.com/107386153/184827756-2887be27-9fb5-42d5-a3d7-112b56b29029.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://user-images.githubusercontent.com/107386153/184827548-6cb9e2f6-65e7-4858-bdb9-370f22bf51de.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://user-images.githubusercontent.com/107386153/184824283-da248524-7854-41df-984f-0f45526905ff.jpg',
      imageAlt: 'person2',
    },
    
    ]


  token:any;

constructor(private reg:MatDialog,private dialog:MatDialog,private log:MatDialog,private api:SaveService,){}
  ngOnInit(): void {
   
  }
opendialog(){
  this.reg.open(LoginComponent,{width:"30%"})
};

opendialog1(){
 this.log.open(RegisterComponent,{width:"30%"}).afterClosed().subscribe(value=>{
 })
}
opendialog2(){

  this.log.open(DialogComponent,{width:"30%"}).afterClosed().subscribe(value=>{
    
  })
}
customerlist(){
  this.log.open(CustomerlistComponent,{width:'80%'})
}


}
