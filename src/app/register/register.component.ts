import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SaveService } from '../save.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 register=new FormGroup({
  username:new FormControl(),
  password:new FormControl(),
  email:new FormControl()
 })
  constructor(private service:SaveService) { }

  ngOnInit(): void {
  }
getdata(){
  this.service.getdata1(this.register.value).subscribe(value=>{
   
    console.log(value);
  })
  console.log(this.register.value);
}
}
