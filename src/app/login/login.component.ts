import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { SaveService } from '../save.service';
import{Router} from'@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responce:any;
  login=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });
  constructor(private service:SaveService,private route:Router ) { }

  ngOnInit(): void {
  }
  getdata(){
    if(this.login.valid){
    this.service.getdata(this.login.value).subscribe(result=>{
      if (result !=null){
        this.responce=result;
        localStorage.setItem('accessToken',this.responce.accessToken);
        this.route.navigate(['']);
        alert("log is updated");
        
      }
      else{
        alert("Error");
      }
      console.log(result);
    })
   
  }
  }
}
