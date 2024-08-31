import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MunicipiosComponent } from './municipios/municipios.component';
import { DeleteModalContentComponent } from './delete-modal-content/delete-modal-content.component';
import { EditModalContentComponent } from './edit-modal-content/edit-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MunicipiosComponent,
    DeleteModalContentComponent,
    EditModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
