// angular dependencies:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// third party:
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentParserFormatter } from './base/NgbDateMomentParserFormatter';

// application base/essentials:
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './base/AuthInterceptor';
import { LoginService } from './login/login.service';
import { TodoService } from './todo.service';

// application components:
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoModalComponent } from './todomodal/todomodal.component';
import { ErrorModalComponent } from './base/ErrorModalComponent';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodolistComponent,
    ErrorModalComponent,
    TodoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    // ngb custom modals needs to be declared here:
    ErrorModalComponent,
    TodoModalComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: NgbDateParserFormatter,
      useFactory: () => new NgbDateMomentParserFormatter('DD-MM-YYYY')
    },
    LoginService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
