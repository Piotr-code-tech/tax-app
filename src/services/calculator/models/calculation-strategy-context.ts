import { CalculationStrategy } from "./calculation-strategy";

export interface CalculationStrategyContext {
    calculate: (incomeAmount: number) => number;
    setStrategy: (strategy: CalculationStrategy) => void;
}
