import React, { FC, useState } from "react";
import { CalculatorService } from "../../services/calculator/models/calculator-service";
import { CalculationStrategyContext } from "../../services/calculator/models/calculation-strategy-context";
import {
    CalculationStrategyRyczalt
} from "../../services/calculator/strategies/income-tax/calculation-strategy-ryczalt";
import {
    CalculationStrategyLinearTax
} from "../../services/calculator/strategies/income-tax/calculation-strategy-linear-tax";

interface Props {
    calculator: CalculatorService;
    incomeTaxContext: CalculationStrategyContext;
}

export const ResultHeaderComponent: FC<Props> = ({ calculator, incomeTaxContext }) => {
    const [result, setResult] = useState(0);
    const calc = () => {
        const calculatedResult = calculator.calculateIncomeTax(1000);
        setResult(calculatedResult);
    }

    const changeStrategyRyczalt = () => {
        incomeTaxContext.setStrategy(new CalculationStrategyRyczalt());
    }

    const changeStrategyLinear = () => {
        incomeTaxContext.setStrategy(new CalculationStrategyLinearTax());
    }

    return <div>
        <button onClick={changeStrategyRyczalt}>Change to ryczalt</button>
        <button onClick={changeStrategyLinear}>Change to linear</button>
        <button onClick={calc}>Calculate</button>
        <span>result {result}</span>
    </div>;
}