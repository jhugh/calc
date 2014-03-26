var Calculator = (function() {
    // Private stuff up here

    // Public methods here
    return {
       // addition operation
       addNumber: function(operand,num) {
            var op = parseInt(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                if (op > 2000000000 || op < -2000000000) {
                    throw new Error ("Out of Range");
                }            
                return op + num;
       },
    
       // subtraction operation
       subtractNumber: function(operand,num) {
            var op = parseInt(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                if (op > 2000000000 || op < -2000000000) {
                    throw new Error ("Out of Range");
                }            
                return num - op;
       },
       
       // multiplication operation
       multiplyNumber: function(operand,num) {
            var op = parseInt(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                if (op > 2000000000 || op < -2000000000) {
                    throw new Error ("Out of Range");
                }            
                return op * num;
       },
       
       // division operation
       divideNumber: function(operand,num) {
            var op = parseInt(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                if (op > 2000000000 || op < -2000000000) {
                    throw new Error ("Out of Range");
                }            
                if (op == 0) {
                    throw new Error ("Divide by zero Error");
                }            
                return num/op;
       }
        
    }
}());