const btn = document.getElementById("btn");
const advNrId = document.getElementById("advNrId");
const advTxtId = document.getElementById("advTxtId");
let nrAdvice = "";
let active = false;

function wait() {
  active = false;
  btn.disabled = false;
}

function getAdvice() {
  if (!active) {
    fetch("https://api.adviceslip.com/advice")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        advNrId.textContent = data.slip.id;
        advTxtId.textContent = data.slip.advice;
        btn.disabled = true;
        active = true;
        setTimeout(wait, 1500);
      })
      .catch(function (err) {
        console.warn("Something went wrong.", err);
      });
  } else {
    return null;
  }
}

btn.addEventListener("click", getAdvice);

getAdvice();
