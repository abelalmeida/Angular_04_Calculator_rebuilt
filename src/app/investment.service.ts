import { Injectable } from '@angular/core';
import { InvestmentParameters } from './investment-input.model';
import { InvestmentResult } from './app.component';
//https://angular.dev/guide/di/dependency-injection
// can use ng g service investment --skip-tests
// service at the root level, Angular creates a single, shared instance of the InvestmentService and injects it into any class that asks for it.
@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
   //property to save results
  resultsData: InvestmentResult[] = [];
 // gather the data entered and process it

  test =  'test';

  // constructor() { }


  calculateInvestmentResults(data: InvestmentParameters) {

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
  //this.resultsData = annualData;
  this.resultsData = annualData;
}

}
