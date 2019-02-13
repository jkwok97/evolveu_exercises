import React, { Component } from 'react';
// import taxes from './taxes';

class TaxesComp extends Component {
    constructor() {
        super()
        this.taxBracket = null;
      }

    taxBracketId = (income) =>  {
        if (income <= 47630) {
            return this.taxBracket = 1;
        } else if (income > 47630 && income <= 95259) {
            return this.taxBracket = 2;
        } else if (income > 95259 && income <= 147667) {
            return this.taxBracket = 3;
        } else if (income > 147667 && income <= 210371) {
            return this.taxBracket = 4;
        } else {
            return this.taxBracket = 5;
        }
    }

    calcTax = (income) => {
        this.taxBracketId(income);
        switch (this.taxBracket) {
            case 1:
                return this.tax = (0.15 * income).toFixed(2);
            case 2: 
                return this.tax = (((income - 47630) * 0.205) + (47630 * 0.15)).toFixed(2);
            case 3:
                return this.tax = (((income - 95259) * 0.26) + ((95259-47630) * 0.205) +(47630 * 0.15)).toFixed(2);
            case 4:
                return this.tax = (((income - 147667) * 0.29) + ((147667-95259) * 0.26) + ((95259-47630) * 0.205) + (47630 * 0.15)).toFixed(2);
            case 5:
                return this.tax = (((income - 210371) * 0.33) + ((210371-147667) * 0.29) + ((147667-95259) * 0.26) + ((95259-47630) * 0.205) + (47630 * 0.15)).toFixed(2);
            default:
                return this.tax = null;
        }
    };

    showTax = () => {
        let income = document.getElementById('text-new-income').value;
        document.getElementById("show-taxes").innerHTML = `$${this.calcTax(income)}`;
    }

    render() {
        return (
            <div className="taxes">
                <h1 className="animated rotateIn">Taxes!</h1>
                <div className="addTaxes animated zoomIn">
                    Income: <input type="text" id="text-new-income" /><br /><br />
                    <button id="calc-tax" onClick={this.showTax}>Calculate Tax</button><br /><br />
                </div> 
                <div className = "show-all" id="show-taxes"></div>
            </div>
        )
    }
}

export default TaxesComp;