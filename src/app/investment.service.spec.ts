import { InvestmentService } from './investment.service';
import { InvestmentParameters } from './investment-input.model';

describe('InvestmentService', () => {
  let service: InvestmentService;

  beforeEach(() => {
    service = new InvestmentService();
  });

  it('should calculate investment results correctly', () => {
    const params: InvestmentParameters = {
      initialInvestment: 1000,
      annualInvestment: 100,
      expectedReturn: 10,
      duration: 2
    };
    service.calculateInvestmentResults(params);
    expect(service.resultsData.length).toBe(2);
    expect(service.resultsData[0].year).toBe(1);
    expect(service.resultsData[1].year).toBe(2);
    expect(service.resultsData[0].valueEndOfYear).toBeGreaterThan(params.initialInvestment);
  });
});
