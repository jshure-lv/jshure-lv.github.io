$(function() {

  var cityRate,
    monthLoan = 0, 
    ccRate = 0,
    taxRate = 0.25,
    loanAmount = 0,
    annLoan = parseInt(loanAmount * 12),
    ccLoan = ccRate + annLoan,
    afterTax = parseFloat(ccLoan - (1 - taxRate));

  var cityRates = {
    nyc:{
        rate: 50711,
        childcare:16250,
    },
    sf: {
      rate:350,
      childcare:1500,
    },
    chi: {
      rate:400,
      childcare:500,
    }
  }

  $('#submitButton').on('click', submitForm);

  function submitForm(){    

    var chosenCity = $(".questionOne input:checked").val();
    

    var loanAmount = parseFloat( $(".questionTwo input").val() );
    

    var childCareChoice = $(".questionThree input:checked").val();
    

    var cityRate = cityRates[chosenCity].rate
    

    var ccRate = cityRates[chosenCity].childcare
    


    console.log(typeof afterTax, typeof cityRate)

    // calculateTargetIncome();

    targetIncome = afterTax + cityRate;


    $("#targetIncome").html('<h1>$'+ targetIncome.toFixed(2) +'</h1>');
    

   
  }

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
  




