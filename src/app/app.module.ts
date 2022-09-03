import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SaveService } from './save.service';
import { CustomerlistComponent } from './customerlist/customerlist.component';

import { CarouselModule } from './carousel/carousel.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DialogComponent,
    CustomerlistComponent,
    // CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatNativeDateModule,CarouselModule
    ,MatToolbarModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatPaginatorModule,
    MatInputModule,MatSortModule,MatRadioModule,MatTableModule,MatSelectModule,MatDatepickerModule,MatCardModule,FlexLayoutModule,ReactiveFormsModule,HttpClientModule,FormsModule,MatDialogModule
  ],
  providers: [HttpClient,{provide:HTTP_INTERCEPTORS,useClass:SaveService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
