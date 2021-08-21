import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRoleManagementComponent } from './user-role-management/user-role-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoleItemComponent } from './user-role-item/user-role-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRoleManagementComponent,
    UserRoleItemComponent,
    SearchPipe,
    FilterPipe,
    UserRoleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
