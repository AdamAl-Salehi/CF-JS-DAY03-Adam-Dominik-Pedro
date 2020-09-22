function calc(array1) {
    var array1 = ['2', '3', '5', '9', '10'];
    var prod = 1;
    for (var i = 0; i < array1.length; i++) {
        prod *= array1[i];
	    document.write(prod);
	}
}
calc(1);