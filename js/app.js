const btn = document.getElementById("btn");
const advNrId = document.getElementById("advNrId");
const advTxtId = document.getElementById("advTxtId");
let nrAdvice = "";
let active = false;

function wait() {
  active = false;
  btn.disabled = false;
}

async function getAdvice() {
  if (!active) {
    await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    })
      .then(function (response) {
        if (response.ok) {
          let data = response.json();
          console.log(data);
          return data;
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        console.log(data.slip.id);
        console.log(data.slip.advice);
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
