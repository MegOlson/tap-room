import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MenuComponent } from './menu.component';
import { EditItemComponent } from './edit-item.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  MenuComponent,
                EditItemComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
