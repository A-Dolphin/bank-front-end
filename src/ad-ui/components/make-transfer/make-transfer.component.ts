import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { TransactionService } from 'src/ad-ui/transaction.service';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss'],
})
export class MakeTransferComponent   {

  faWallet = faWallet;
  readonly balance$ = this.transactionService.balance$;
  readonly placeholder$ = this.balance$.pipe(
    map((balance: any) => `My Personal Account: ${balance}`),
    tap(msg => console.log(msg)
  ));

  transferForm = new FormGroup({
      'fromAccount': new FormControl(),
      'toAccount' : new FormControl(null, Validators.required),
      'amount' : new FormControl(null, [Validators.required, Validators.min(0)])
    },{
      updateOn: 'blur'
    }
  );


  get f(){
    return this.transferForm.controls;
  }

  
    constructor(public dialog: MatDialog, private transactionService:TransactionService) {}
    
    openModal() {
      this.dialog.open(ModalComponent, {
        
        data:{
          toAccount: this.transferForm.get('toAccount')!.value,
          amount: this.transferForm.get('amount')!.value
        },
        panelClass: 'custom-modal-container'
      });
    }


}




// from-account (prefilled and disabled)
// to-account (mandatory, no validation)
// amount (     a. It is a mandatory field

    // b. Negative numbers are not allowed

    // c. Decimals are permitted

    // b. It should not allow amount below the total balance of -€500)