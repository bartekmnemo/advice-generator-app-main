const btn = document.getElementById("btn");
const advNrId = document.getElementById("advNrId");
const advTxtId = document.getElementById("advTxtId");

advNrId.textContent = "117";
advTxtId.textContent =
  "It is easy to sit up and take notice, What is difficult is getting up and taking action";

let active = false;

function wait() {
  active = false;
  btn.disabled = false;
}

async function getAdvice() {
  if (!active) {
    btn.disabled = true;
    active = true;
    await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    })
      .then(function (response) {
        if (response.ok) {
          let data = response.json();
          return data;
        } else {
          btn.disabled = false;
          active = false;
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        advNrId.textContent = data.slip.id;
        advTxtId.textContent = data.slip.advice;
        setTimeout(wait, 1500);
      })
      .catch(function (err) {
        btn.disabled = false;
        active = false;
        console.warn("Something went wrong.", err);
      });
  } else {
    return null;
  }
}

btn.addEventListener("click", getAdvice);

// getAdvice();
