import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionService } from 'src/ad-ui/transaction.service';
import { MakeTransferComponent } from '../make-transfer/make-transfer.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent{

  toAccount =  this.data.toAccount
  amount = this.data.amount
  

  updateTransactions(){
  
    this.transactionService.updateTransaction(this.toAccount,this.amount)
    console.log(this.transactionService.localData)
    this.transactionService.updateBalance(this.transactionService.getAccountBalance() - this.amount)
  }


  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private transactionService: TransactionService) 
  { }


}
