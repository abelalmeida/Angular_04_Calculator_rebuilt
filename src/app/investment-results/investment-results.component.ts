import { Component, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']
})


export class InvestmentResultsComponent {
  // Input property to receive the investment results data from the parent component
  // @Input() investmentResultsData: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[] = [];

  // use input function
  investmentResultsData = input<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]>([]);

}
