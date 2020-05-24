function abs(numbers) {

    let absnumbers = numbers.map(function(value) {
        if (value < 0){
         value = -value;
        return value;
    }
    });
    return absnumbers;
}

function evenOnly(numbers) {
    let result = numbers.filter(
        function(value) {
        if (value % 2 == 0){
            return value;
        } 
    })
    return result;
}

function sum(number) {
    let sum2 = number.reduce(function(sum, value) {
        return sum + value;
    });
    return sum2;
}

function flatten2D(number) {

    let flatten = number.reduce(function(tab, value) {

        tab = tab.concat(value);
        return tab;
    }, []);
    return flatten;
}

function removeDuplicates(values) {

    let nodup = values.reduce(function(tab, value) {

        if (tab.indexOf(value) == -1) {
            tab.push(value);
            return tab;
        } else
         return tab;

    }, [])
    return nodup;
}