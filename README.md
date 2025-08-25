# EssentialsPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0-next.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Instructions:

Create components
- 1 header check the image 

- 2. Userinput 
 -- build a from in the UserInput.html using ngSubmit error to use ngModel to bind properties, which needs to i mport FormsModule
    - https://angular.dev/api/forms/NgForm
    - create a custom event `calculateInvestmentResults` - create a new EventEmitter<type of data ObJECT>() using an @Output() decorator
    - add the function (calculateInvestmentResults) within the app.component.html in the tag selector: `app-user-input` which is decorated with decorator `@Output`
    - (calculateInventResults) -This output event is used to 
    communicate investment calculation requests from the user-input component to its parent component. The payload is of type
    - set it equal to onCalculateInvestmentResults - pass in $event
    -- $event provides a reference to the underlying event object in this case is 
    -- InvestmentParameters ={ initialInvestment: number; annualInvestment: number; expectedReturn: number duration: number;}, 
    -- which contains information about the event that just happened. The specific properties available on the $event object depend on the type of event.
    - test that onCalculateInvestmentResults work with AppComponent do a console log


- 3 create a results component, add the table to the investment-results.component.html to dynamically represent changing data, then add the selector from the investment-results.component, so the property binding happens between `investmentResultsData` and `resultsData` so for example <app-investment-results [investmentResultsData]="resultsData"/>
    



✘ [ERROR] NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'. [plugin angular-compiler]

    src/app/user-input/user-input.component.html:17:59:
      17 │ ...er" id="duration" name="duration" [(ngModel)]="duration" required>
         ╵                                      ~~~~~~~~~~~~~~~~~~~~~~
