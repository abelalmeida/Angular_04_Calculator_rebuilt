import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
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

    // investmentResultsData = input<{
    //   year: number;
    //   interest: number;
    //   valueEndOfYear: number;
    //   annualInvestment: number;
    //   totalInterest: number;
    //   totalAmountInvested: number;
    // }[]>();
//https://angular.dev/guide/components/inputs#configuring-inputs

    // investmentResultsData = input<{
    //   year: number;
    //   interest: number;
    //   valueEndOfYear: number;
    //   annualInvestment: number;
    //   totalInterest: number;
    //   totalAmountInvested: number;
    // }[] | undefined> ();

private investmentResultsDataVar = inject(InvestmentService);
    

get investmentResultsData() {
  return this.investmentResultsDataVar.resultsData;
}

}
