import { CalculatorService } from "./models/calculator-service";
import { CalculationStrategyContext } from "./models/calculation-strategy-context";

export class TaxCalculatorService implements CalculatorService {
    private incomeTaxContext: CalculationStrategyContext;

    constructor(incomeTaxContext: CalculationStrategyContext) {
        this.incomeTaxContext = incomeTaxContext;
    }

    public calculateIncomeTax(incomeAmount: number): number {
        return this.incomeTaxContext.calculate(incomeAmount);
    }

    public calculateHealthyDistribution(): number {
        return 0;
    }

    public calculateVAT(): number {
        return 0;
    }

    public calculateZUS(): number {
        return 0;
    }

}