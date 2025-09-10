import { Component ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';



@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  // USE A custom event to communicate from child to parent component.
  // Use the @Output() decorator to emit a custom event from the UserInputComponent to the parent.
  // Alternatively, you can define an output function to handle the emission.
  // For example:

  //@Output() calculate = new EventEmitter<InvestmentParameters>();



  /**
   * Emits an event containing the investment parameters when a calculation is triggered.
   * 
   * @remarks
   * This output event is used to communicate investment calculation requests from the user-input component
   * to its parent component. The payload is of type {@link InvestmentParameters}.
   * 
   * @eventProperty
   */

// calculateInvestmentResults = output<InvestmentParameters>();


// add constructor
investmentService = inject(InvestmentService);


  // @Input() initialInvestment: string = '0'
  // @Input() annualInvestment: string = '0'
  // @Input() expectedReturn: string = '0'
  // @Input() duration: string = '0'
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';


  /**
   * Handles the form submission event for the investment input form.
   * 
   * - Collects and parses user input values for initial investment, annual investment, expected return, and duration.
   * - Emits the collected investment data via the `calculateInvestmentResults` event emitter.
   * - Logs the submission and data to the console for debugging purposes.
   */
  onSubmit(){
  //  this.calculateInvestmentResults.emit({
  //    initialInvestment: +this.initialInvestment,
  //    annualInvestment: +this.annualInvestment,
  //    expectedReturn: +this.expectedReturn,
  //    duration: +this.duration
  //  });

     this.investmentService.calculateInvestmentResults({
     initialInvestment: +this.initialInvestment,
     annualInvestment: +this.annualInvestment,
     expectedReturn: +this.expectedReturn,
     duration: +this.duration
   });


   
   console.log('Form submitted');
   console.log('Data:', {
     initialInvestment: +this.initialInvestment,
     annualInvestment: +this.annualInvestment,
     expectedReturn: +this.expectedReturn,
     duration: +this.duration
   });
  }

}