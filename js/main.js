window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '681-1199', containers: 960 },
        mobile: { range: '-680', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};


// non-jQuery JS functions
document.addEventListener("DOMContentLoaded", function(event) { 
    var iElem = document.getElementById('ninput');    // get number to add/subtract/multiply/divide
    var oElem = document.getElementById('noutput');   // get number to operated on
    document.getElementById('addbutton').onclick = function() {
        var inum = iElem.value; 
        var onum = oElem.value; 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.addNumber(inum,onum);
        }
    };

    document.getElementById('subtractbutton').onclick = function() {
        var inum = iElem.value; 
        var onum = oElem.value; 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.subtractNumber(inum,onum);
        }
    };

    document.getElementById('multiplybutton').onclick = function() {
        var inum = iElem.value; 
        var onum = oElem.value; 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.multiplyNumber(inum,onum);
        }
    };

    document.getElementById('dividebutton').onclick = function() {
        var inum = iElem.value; 
        var onum = oElem.value; 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.divideNumber(inum,onum);
        }
    };

    document.getElementById("clearbutton").onclick = function() {
        //document.getElementById("finput").value = "";
        iElem.value = "";
        //document.getElementById("cinput").value = "";
        oElem.value = 0;
    };
});

    



