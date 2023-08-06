document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
  
    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Validate and process payment here
      const cardNumber = document.getElementById("cardNumber").value;
      const cvv = document.getElementById("cvv").value;
      const expDate = document.getElementById("expDate").value;
      const candidateName = document.getElementById("candidateName").value;
      
      // Simulate payment processing
      console.log("Payment processing...");
      console.log("Card Number:", cardNumber);
      console.log("CVV:", cvv);
      console.log("Expiration Date:", expDate);
      console.log("Candidate Name:", candidateName);
    });
  });
  