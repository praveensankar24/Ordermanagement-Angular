import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SaveService } from '../save.service';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  displayedColumns: string[] = ['orderid', 'username', 'productname', 'date','price','quantity','status','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  itemsArray: any;
  constructor(private api:SaveService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts(){
    this.api.orderdata1().subscribe({next:(res)=>{
      this.itemsArray = res;
        this.dataSource= new MatTableDataSource(this.itemsArray);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      console.log(res);
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
  })
  }
  editproduct(row:any){
     this.dialog.open(DialogComponent,{
       width:'30%',
       data:row
     }).afterClosed().subscribe(value=>{
      if(value==="update"){
        this.getproducts();
      }
     })
  }
  deleteproduct(data:any){
    this.api.deleteproduct(data).subscribe({
      next:(res)=>{
        console.log(res);
        alert("Product Delete Successfully");
        this.getproducts();
        },
      error:()=>{
        alert("Error While deleting the product");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
