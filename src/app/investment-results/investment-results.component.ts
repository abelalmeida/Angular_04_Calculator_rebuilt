import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})


export class InvestmentResultsComponent {
  // Input property to receive the investment results data from the parent component
  @Input() investmentResultsData: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] = [];

}
