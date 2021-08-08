import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BbUIModule } from 'src/bb-ui/bb-ui.module';
import { MakeTransferComponent } from './components/make-transfer/make-transfer.component';
import { ModalComponent } from './components/modal/modal.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { HttpClientModule } from '@angular/common/http';


const COMPONENTS = [

  MakeTransferComponent,
  ModalComponent,
  TransactionsListComponent,
  
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BbUIModule,
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports: COMPONENTS,
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdUIModule { }
