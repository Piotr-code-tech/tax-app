import { CalculationStrategy } from "../../models/calculation-strategy";

export class CalculationStrategyLinearTax implements CalculationStrategy {
    calculate(incomeValue: number): number {
        return 23;
    }
}