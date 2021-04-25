// 1ST WAY : CLASSIC SOLUTION =========================================

let url = `https://api.cryptonator.com/api/ticker`;


let select = document.querySelector(".entryField"); // For first currency selection

let select2 = document.querySelector(".outputField");  // For second currency selection

let input = document.querySelector("#cryptoInput");

let form = document.querySelector("#conversion-form");


let output = document.querySelector("#cryptoOutput");

form.addEventListener("submit", e => {
    e.preventDefault(); 

   
        /* let newInput = parseInt(input); */


        fetch(`${url}/${select.value}-${select2.value}`)
            .then(data => data.json()) // We are coverting JSon file to Object and the name of the Object will be "data" anymore! "data"
            .then( // The new object name is "response" here! and "response" is the parameter of the function!
                response =>
                (
                   
                    output.value = (
                    (response.ticker.price * input.value).toFixed(1)
                ))
            );


    });
    


// 2ND WAY : CLASSES SOLUTION =========================================


class CryptoCurrency {
    constructor(){
        
        this.url = `https://api.cryptonator.com/api/ticker`;

        this.select = document.querySelector(".entryField");

        this.select2 = document.querySelector(".outputField");

        this.input = document.querySelector("#cryptoInput");

        this.form = document.querySelector("#conversion-form");

        this.output = document.querySelector("#cryptoOutput");

        this.anything();

    }

    anything (){

        this.form.addEventListener("submit", e => {
            e.preventDefault(); 

           
              
    
                fetch(`${this.url}/${this.select.value}-${this.select2.value}`)
                    .then(data => data.json()) // We are coverting JSon file to Object and the name of the Object will be "data" anymore! "data"
                    .then( // The new object name is "response" here! and "response" is the parameter of the function!
                        response =>
                        (
                           
                            this.output.value = (
                            (response.ticker.price * this.input.value).toFixed(1)
                        ))
                    );
            });

    }


}

let myCryptoCurrency = new CryptoCurrency(); // new keyword will convert your class to the object