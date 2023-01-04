import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FormComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormComponent,
    ResultComponent
  ]
})
export class ComponentsModule { }
