import { CalculationStrategy } from "../../models/calculation-strategy";

export class CalculationStrategyRyczalt implements CalculationStrategy {
    calculate(incomeValue: number): number {
        return 55;
    }
}