import { CalculationStrategyContext } from "../../models/calculation-strategy-context";
import { CalculationStrategy } from "../../models/calculation-strategy";
import { CalculationStrategyLinearTax } from "./calculation-strategy-linear-tax";

export class CalculateIncomeTaxStrategyContext implements CalculationStrategyContext {
    private strategy: CalculationStrategy;

    constructor() {
        this.strategy = new CalculationStrategyLinearTax();
    }

    public calculate(incomeAmount: number): number {
        return this.strategy.calculate(incomeAmount);
    }

    public setStrategy(strategy: CalculationStrategy): void {
        this.strategy = strategy;
    }
}