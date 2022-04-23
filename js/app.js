const btn = document.getElementById("btn");
const advNrId = document.getElementById("advNrId");
const advTxtId = document.getElementById("advTxtId");
let nrAdvice = "";

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      // The API call was successful!
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      advNrId.textContent = data.slip.id;
      advTxtId.textContent = data.slip.advice;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

btn.addEventListener("click", getAdvice);

getAdvice();
