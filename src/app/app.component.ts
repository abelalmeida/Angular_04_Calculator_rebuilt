import { Component, signal } from '@angular/core';
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
 // Property to save results

   // resultsData: InvestmentResult[] = [];
 // Stateful data


 
 // Signal (Reactive State) for investment results data

/**
 * A reactive signal holding an array of `InvestmentResult` objects.
 * Used to store and update the results of investment calculations.
 *
 * @remarks
 * The signal allows for automatic change detection and reactivity within Angular components.
 *
 * @see {@link InvestmentResult}
 */
resultsData = signal<InvestmentResult[]>([]);


  /**
   * Calculates annual investment results based on provided investment parameters.
   *
   * This method computes the investment value, interest earned, total interest,
   * and total amount invested for each year over the specified duration.
   * The results are stored in the `resultsData` property.
   *
   * @param data - The investment parameters.
   * @param data.initialInvestment - The initial amount invested.
   * @param data.annualInvestment - The amount invested annually.
   * @param data.expectedReturn - The expected annual return rate (percentage).
   * @param data.duration - The investment duration in years.
   */
  onCalculateInvestmentResults(data: InvestmentParameters) {
    /**
     * Destructures the `data` object to extract investment parameters.
     *
     * @param data - An object containing investment details.
     * @param data.initialInvestment - The initial amount invested.
     * @param data.annualInvestment - The amount invested annually.
     * @param data.expectedReturn - The expected annual return rate (as a percentage or decimal).
     * @param data.duration - The investment duration in years.
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
 // this.resultsData = annualData;
 this.resultsData.set(annualData);
}

}
