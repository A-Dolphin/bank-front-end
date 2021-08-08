import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

interface Transaction {
  amountCurrency: {
    amount: number;
    currencyCode: string;
  };
  type: string;
  creditDebitIndicator: string;
}
interface Merchant {
  name: string;
  accountNumber: string;
}
export interface TransactionItem {
  categoryCode: string;
  dates: {
    valueDate: number;
  };
  transaction: Transaction;
  merchant: Merchant;
}
 interface LocalDataResponse {
  data: TransactionItem[];
}


const url = 'https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions'
const localUrl = '../assets/transactions.json';


@Injectable({
  providedIn: 'root'
})

export class TransactionService  {
  localData: any[];
  localDataArray: any
  public localData$ : Observable<any>

  private readonly balance = new BehaviorSubject(5824.76);
  readonly balance$ = this.balance.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getLocalDataArray()
    this.localDataArray = this.getLocalDataArray() 
  }

  getAccountBalance(){
    return this.balance.getValue()
  }

  updateBalance(newBalance: number) {
    this.balance.next(newBalance);
    console.log(newBalance)
  }


  getLocalData(): Observable<any> {
    return this.httpClient.get<LocalDataResponse>(localUrl).pipe(map(l => l.data));
  }

  setLocalData(data:[]){
    this.localData = data
  }

  getLocalDataArray() {
    this.getLocalData().subscribe((data)=>{
       this.setLocalData(data)
    })
  }

  readLocalData(){
    return of(this.localData)
  }

  updateTransaction(merchantName:string, transactionAmount:number){
    const newTransaction:any = {
    "categoryCode": "#e25a2c",
    "dates": {
      "valueDate": (new Date).getTime()
    },
    "transaction": {
      "amountCurrency": {
        "amount": transactionAmount,
        "currencyCode": "EUR"
      },
      "type": "Online Transfer",
      "creditDebitIndicator": "DBIT"
    },
    "merchant": {
      "name": merchantName,
      "accountNumber": "SI64397745065188826"
    }
    }
    this.localData.unshift(newTransaction)
  }
     

}


