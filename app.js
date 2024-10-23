console.log("Calcola il tuo Biglietto");

const travelLengthElement = document.getElementById("travel-lenght");
const userAgeElement = document.getElementById("user-age");
const submitButtonElement = document.querySelector("button");
// console.log(travelLength);
// console.log(userAge);
// console.log(submitButton);

const discountJunior = 0.2;
const discountSenior = 0.4;

const standardPrice = travelLength * 0.21;

if (
  !isNaN(travelLength) &&
  !isNaN(userAge) &&
  travelLength >= 0 &&
  userAge >= 0
) {
  function calculateFinalPrice(userAge) {
    return userAge < 18
      ? `Il prezzo scontato per minorenni è di ${(
          standardPrice -
          standardPrice * discountJunior
        ).toFixed(2)}`
      : userAge >= 65
      ? `Il prezzo scontato per Over65 è di ${(
          standardPrice -
          standardPrice * discountSenior
        ).toFixed(2)}`
      : `Il prezzo del tuo viaggio è di ${standardPrice.toFixed(2)}€`;
  }
  console.log(calculateFinalPrice(userAge));
} else {
  //   alert("I dati inseriti non sono validi!");
}
