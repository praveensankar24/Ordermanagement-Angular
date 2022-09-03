import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from './auth/service.service';
@Injectable({
  providedIn: 'root'
})
export class SaveService implements HttpInterceptor {

  constructor(private http:HttpClient,private inject:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    let authservice=this.inject.get(ServiceService);
 
    let jwttoken=req.clone({
      setHeaders:{
          Authorization:`Bearer ${authservice.gettoken()}`
        
      }
    });
    
    return next.handle(jwttoken);
  }
  //login
getdata(data1:any){
   return this.http.post('http://localhost:5000/apk/login',data1);
}
  //register
getdata1(data:any){
    return this.http.post('http://localhost:5000/apk/register',data); 
}
  //customer order
orderdata(data2:any){
  return this.http.post('http://localhost:5000/apk/takeorder',data2);
}
   //get orderlist
orderdata1(){
    return this.http.get('http://localhost:5000/apk/orderlist');
}
  //update customer order
putproduct(data:any){
    return this.http.put('http://localhost:5000/apk/orderupdate',data);
}
  //delete customer order
deleteproduct(data:any){
  return this.http.post('http://localhost:5000/apk/orderdelete',data);
}
}
