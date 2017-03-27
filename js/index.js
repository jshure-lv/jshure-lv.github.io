$(function() {

  var cityRate,
    ccRate = 0,
    taxRate = 0.25,
    loanAmount = 0,
    annLoan = parseInt(loanAmount * 12),
    ccLoan = ccRate + annLoan,
    afterTax = (ccLoan) / (1 - taxRate);

  var cityRates = {
    nyc:{
        rate: 50711,
        childcare:16250,
    },
    sf: {
      rate:88829,
      childcare:22800,
    },
    chi: {
      rate:50702,
      childcare:13000,
    }
  }

  $('#submitButton').on('click', submitForm);

  function submitForm(){    

    var chosenCity = $(".questionOne input:checked").val();
    console.log("Chosen City:" + chosenCity);
    
    var loanAmount = parseFloat( $(".questionTwo input").val());
    console.log("Loan Amount:" + loanAmount);
    console.log("Annual Loan:" + annLoan);

    var childCareChoice = $(".questionThree input:checked").val();
    console.log("Child Care Response:" + childCareChoice);

    var cityRate = cityRates[chosenCity].rate
    

    var ccRate = cityRates[chosenCity].childcare
    console.log("Child Care Rate:" + ccRate);
    
    // console.log(typeof afterTax, typeof cityRate)

    // calculateTargetIncome();

    // targetIncome = afterTax + cityRate;

    targetIncome = cityRate + ((ccRate + (loanAmount * 12))/(.75));
    // targetIncome = cityRate + (loanAmount * 12)/(.75);

    targetIncomeNoCC  =  cityRate + (loanAmount * 12)/(.75); 
    console.log("Target Income: " + targetIncome);
    console.log("Target Income No CC: " + targetIncomeNoCC);

    // PLACE TARGET INCOME IN INTERACE
    if (childCareChoice === "yes"){
      $("#targetIncome").html('<h1>$'+ targetIncome.toFixed(0) +'</h1>');
    }

    if (childCareChoice === "no"){
      $("#targetIncome").html('<h1>$'+ targetIncomeNoCC.toFixed(0) +'</h1>');
    }

    if (childCareChoice === "unsure"){
      $("#targetIncome").html('<h1>$'+ targetIncomeNoCC.toFixed(0) +'</h1>');
    }


   
    }
    // ALERT FOR OTHER CITY
    $('#otherCity').click(otherCityAlert);

    function otherCityAlert(){
      alert("Hey there! We can handle only the three cities above. Please choose one of them or check back later.");
    }

    function calculateTargetIncome(){


    
 } 
 function displayTargetIncome(){
        $("#targetIncome").html(targetIncome);
    }
 

});