var input = document.getElementById("nom");
input.addEventListener("input", function () {
  if (this.value.length > 30) this.value = this.value.slice(0, 30);
});

var input = document.getElementById("num1");
input.addEventListener("input", function () {
  if (this.value.length > 4) this.value = this.value.slice(0, 4);
});

var input = document.getElementById("num2");
input.addEventListener("input", function () {
  if (this.value.length > 4) this.value = this.value.slice(0, 4);
});

var input = document.getElementById("num3");
input.addEventListener("input", function () {
  if (this.value.length > 4) this.value = this.value.slice(0, 4);
});

var input = document.getElementById("num4");
input.addEventListener("input", function () {
  if (this.value.length > 4) this.value = this.value.slice(0, 4);
});

document.querySelector(".nom-input").oninput = () => {
  document.querySelector(".nom-box").innerText =
    document.querySelector(".nom-input").value;
};

document.querySelector(".num-input1").oninput = () => {
  document.querySelector(".number-box1").innerText =
    document.querySelector(".num-input1").value;
};

document.querySelector(".num-input2").oninput = () => {
  document.querySelector(".number-box2").innerText =
    document.querySelector(".num-input2").value;
};

document.querySelector(".num-input3").oninput = () => {
  document.querySelector(".number-box3").innerText =
    document.querySelector(".num-input3").value;
};

document.querySelector(".num-input4").oninput = () => {
  document.querySelector(".number-box4").innerText =
    document.querySelector(".num-input4").value;
};

document.querySelectorAll(".footer .f-color-card").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main-color", color);
  };
});

document.querySelectorAll(".footer .s-color-card").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--second-color", color);
  };
});