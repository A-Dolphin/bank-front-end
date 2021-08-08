import { Component,Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/ad-ui/transaction.service';
import { TransactionItem } from 'src/ad-ui/transaction.service';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})


export class TransactionsListComponent {


  faListUl = faListUl;
  @Input() transactionItem: TransactionItem;
  
  transactions$ = this.transactionService.getLocalData();
  
  constructor(private transactionService: TransactionService) { 
  }
}