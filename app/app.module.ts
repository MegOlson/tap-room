import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MenuComponent } from './menu.component';
import { EditItemComponent } from './edit-item.component';
import { AddKegComponent } from './add-keg.component';
import { LowKegPipe } from './lowKegs.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  MenuComponent,
                EditItemComponent,
                AddKegComponent,
                LowKegPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
