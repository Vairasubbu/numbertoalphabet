import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertorService } from './convertor.service';
import { ConvertorComponent } from './convertor/convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConvertorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
