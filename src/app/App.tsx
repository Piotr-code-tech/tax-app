import React from 'react';
import './App.css';

import { ResultHeaderComponent } from "../components/results-header/result-header.component";
import { TaxCalculatorService } from "../services/calculator/calculator.service";
import {
  CalculateIncomeTaxStrategyContext
} from "../services/calculator/strategies/income-tax/calculate-income-tax-strategy-context";

function App() {
  const incomeTaxContext = new CalculateIncomeTaxStrategyContext();
  const calculator = new TaxCalculatorService(incomeTaxContext);

  return (
    <div className="App">
      <ResultHeaderComponent calculator={calculator} incomeTaxContext={incomeTaxContext} />
    </div>
  );
}

export default App;
