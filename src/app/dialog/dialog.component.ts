import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SaveService } from '../save.service';
import{Router} from'@angular/router';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit {
  response:any;
  actionbtn:String="Save"
  order=new FormGroup({
    orderid:new FormControl(''),
    username:new FormControl(''),
    productname:new FormControl(''),
    date:new FormControl(''),
    price:new FormControl(''),
    quantity:new FormControl(''),
    status:new FormControl('')
    
  })
  
  constructor(private save:SaveService,
    @Inject(MAT_DIALOG_DATA) public editdata:any,private matdialog:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    
   if(this.editdata){
    this.actionbtn="Update";
    this.order.controls['orderid'].setValue(this.editdata.orderid);
    this.order.controls['username'].setValue(this.editdata.username);
    this.order.controls['productname'].setValue(this.editdata.productname);
    this.order.controls['date'].setValue(this.editdata.date);
    this.order.controls['price'].setValue(this.editdata.price);
    this.order.controls['quantity'].setValue(this.editdata.quantity);
    this.order.controls['status'].setValue(this.editdata.status);
    
   }


 }
 Addproduct(){
  if(!this.editdata){
    if(this.order.valid){
      
  this.save.orderdata(this.order.value).subscribe(value=>{
    alert("Product added successfully");
    this.order.reset();
    this.matdialog.close('save');
    console.log(value);
  })
  }}
    else{
       
       this.updateproduct();
    }
}
updateproduct(){
  this.save.putproduct(this.order.value)
  .subscribe({next:(value)=>{
    console.log(value);
    alert("product update successfully")
    this.order.reset();
    this.matdialog.close('update')
  },
  error:()=>{
    alert("Error while updating the record");
    this.editdata.value;
  }
  })
}
}
