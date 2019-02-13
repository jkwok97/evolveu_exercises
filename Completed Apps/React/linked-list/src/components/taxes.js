class Taxes {
    constructor (taxBracket, tax) {
        this.taxBracket = taxBracket;
        this.tax = tax;
    }

    taxBracketId = (income) => {
        if (income <= 47630) {
            this.taxBracket = 1;
        } else if (income > 47630 && income <= 95259) {
            this.taxBracket = 2;
        } else if (income > 95259 && income <= 147667) {
            this.taxBracket = 3;
        } else if (income > 147667 && income <= 210371) {
            this.taxBracket = 4;
        } else {
            this.taxBracket = 5;
        }
        return this.taxBracket;
    }
    
    taxCalc = (income, taxBracketID)  => {
        taxBracketID(income);
        switch (this.taxBracket) {
            case 1:
                return this.tax = (0.15 * income);
            case 2: 
                return this.tax = (((income - 47630) * 0.205) + (47630 * 0.15));
            case 3:
                return this.tax = (((income - 95259) * 0.26) + ((95259-47630) * 0.205) +(47630 * 0.15));
            case 4:
                return this.tax = (((income - 147667) * 0.29) + ((147667-95259) * 0.26) + ((95259-47630) * 0.205) + (47630 * 0.15));
            case 5:
                return this.tax = (((income - 210371) * 0.33) + ((210371-147667) * 0.29) + ((147667-95259) * 0.26) + ((95259-47630) * 0.205) + (47630 * 0.15));
            default:
                return this.tax = null;
        }
    }
}

export default { Taxes };