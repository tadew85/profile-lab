import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';

let appRoutes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent },
  { path: "", redirectTo: "/profile", pathMatch: "full" }
]


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
