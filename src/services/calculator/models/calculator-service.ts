export interface CalculatorService {
    calculateZUS: () => number;
    calculateVAT: () => number;
    calculateHealthyDistribution: () => number;
    calculateIncomeTax: (incomeAmount: number) => number;
}

