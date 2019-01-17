let stringTest = "aaaassdsdfwewwws"

function countTriples(string){

    let triples = 0;

    for (i = 0; i < string.length; i++){

        if (string.charAt(i + 1) == string.charAt(i)
        && string.charAt(i + 2) == string.charAt(i)) {
            triples += 1;
            console.log(string.charAt(i) + triples)
        }

        if (i == string.length - 1){
            document.getElementById("output").innerHTML = triples;
        }

    }
}
    
