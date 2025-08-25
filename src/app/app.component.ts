import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentParameters } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

// Define InvestmentResult interface
export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})


export class AppComponent {
 //property to save results
  resultsData: InvestmentResult[] = [];
  onCalculateInvestmentResults(data: InvestmentParameters) {


  /**
   * Destructures the `data` object to extract investment parameters.
   *
   * @param data - An object containing investment details.
   * @property initialInvestment - The initial amount invested.
   * @property annualInvestment - The amount invested annually.
   * @property expectedReturn - The expected annual return rate (as a percentage or decimal).
   * @property duration - The investment duration in years.
   */
  const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }
  //console.log(annualData);
  this.resultsData = annualData;
}

}
