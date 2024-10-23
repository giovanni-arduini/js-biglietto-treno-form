console.log("Calcola il tuo Biglietto");

const travelLengthElement = document.getElementById("travel-lenght");
const userAgeElement = document.getElementById("user-age");
const formElement = document.querySelector("form");
// console.log(travelLength);
// console.log(userAge);
// console.log(submitButton);
const discountJunior = 0.2;
const discountSenior = 0.4;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("ho inviato il modulo");

  const priceDisplay = document.getElementById("price-display");
  console.log(priceDisplay);
  const travelLength = travelLengthElement.value;
  //   console.log(travelLength);
  const userAge = userAgeElement.value;
  //   console.log(userAge);
  const standardPrice = travelLength * 0.21;
  //   console.log(standardPrice);
  if (
    !isNaN(travelLength) &&
    !isNaN(userAge) &&
    travelLength >= 0 &&
    userAge >= 0
  ) {
    // function calculateFinalPrice(userAge) {
    //   return userAge < 18
    //     ? `Il prezzo scontato per minorenni è di ${(
    //         standardPrice -
    //         standardPrice * discountJunior
    //       ).toFixed(2)}`
    //     : userAge >= 65
    //     ? `Il prezzo scontato per Over65 è di ${(
    //         standardPrice -
    //         standardPrice * discountSenior
    //       ).toFixed(2)}`
    //     : `Il prezzo del tuo viaggio è di ${standardPrice.toFixed(2)}€`;
    // }

    function calculateFinalPrice(userAge) {
      if (userAge < 18) {
        const price = `Il prezzo scontato per minorenni è di ${(
          standardPrice -
          standardPrice * discountJunior
        ).toFixed(2)}`;
        return price;
      } else if (userAge >= 65) {
        const price = `Il prezzo scontato per Over65 è di ${(
          standardPrice -
          standardPrice * discountSenior
        ).toFixed(2)}`;
        return price;
      } else {
        const price = `Il prezzo del tuo viaggio è di ${standardPrice.toFixed(
          2
        )}€`;
        return price;
      }
    }

    console.log(calculateFinalPrice(userAge));
    priceDisplay.classList.remove("d-none");
  } else {
    alert("I dati inseriti non sono validi!");
  }
});
