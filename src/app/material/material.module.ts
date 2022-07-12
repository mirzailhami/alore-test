import { NgModule } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CdkAccordionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
