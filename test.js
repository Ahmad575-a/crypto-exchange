

 // Step 1: Define all items that we will use inside the html

 const dropdownElement = document.querySelector("#dropdown"); // For first currency selection

 const dropDownCurrency = document.querySelector("#dropdown2");  // For second currency selection

 let input = document.querySelector("#cryptoInput");

 const cryptoOutput = document.querySelector("#cryptoOutput");


const form = document.querySelector("#conversion-form"); // Select the form by using it's ID.

//const form = document.querySelector(".mybtn"); 

 // Step : We will manipulate API link by using "fetch" method


 //function search (){

        let url = `https://api.cryptonator.com/api/ticker/${dropdownElement.value}-${dropDownCurrency.value}`


        form.addEventListener("submit", e =>{
                e.preventDefault();
            
                console.log(url);


                fetch(url)
                .then(response => response.json()) // Convert your Json file to Object by using ".json"
                .then( data => ( cryptoOutput.value = (data.ticker.price * input))
                     
                )
        })
      


 //}

 