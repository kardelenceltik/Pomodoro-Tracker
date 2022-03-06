// initial value assignments
let minute = 24;
let second = 60;
let time;
let stopButton = document.getElementById("stopBtn");

document.getElementById("startBtn").onclick = function () {
  // start button activated
  minute = 24;
  second = 60;
  time = setInterval(() => {
    second = parseInt(second);
    minute = parseInt(minute);
    if (minute === 0 && second === 0) {
      clearInterval(time);
      swal({
        title: "Süperrrr!",
        text: "Süre bitti, bir kahveyi hakettin ☕",
        icon: "success",
        button: "🤗 ",
      });
    } else if (minute === 0 && second === 10) {
      second--;
    } else if (second === 0) {
      minute--;
      second = 60;
    } else {
      second--;
    }
    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    document.getElementById("time-area").innerHTML = `${minute}:${second}`;
  }, 1000);
};

stopButton.addEventListener("click", () => {
  // stop button activated
  clearInterval(time);
  document.getElementById("time-area").innerHTML = "00:00";
});

let items = [];
let list = document.getElementById("myList");

items.forEach(function (item) {
  CreateItem(item);
});

list.addEventListener("click", function (item) {
  // remove if value is "checked", add if not
  if (item.target.tagName == "LI") {
    item.target.classList.toggle("checked");
    ToogleDeleteButton();
  }
});
document.querySelector("#selectAll").onclick = function () {
  // select all button activated
  let liElements = document.querySelectorAll("li");
  liElements.forEach((element) => {
    element.click();
  });
};

document.querySelector("#deleteAll").onclick = function () {
  // delete all button activated

  let elements = document.querySelectorAll(".checked");

  elements.forEach(function (item) {
    item.style.display = "none";
  });
};

function ToogleDeleteButton() {
  //Show delete all button when item-items is selected, hide if nothing is selected
  let checkList = document.querySelectorAll(".checked");

  if (checkList.length > 0) {
    document.querySelector("#deleteAll").classList.remove("d-none");
  } else {
    document.querySelector("#deleteAll").classList.add("d-none");
  }
}
document.getElementById("btnCreate").onclick = function () {
  // Checking if value is empty and warning
  let item = document.getElementById("txtItem").value;
  if (item === "") {
    alert("Lütfen Bir Değer Giriniz!");
    return;
  }
  CreateItem(item);
};
function CreateItem(item) {
  // Creating the li element
  let li = document.createElement("li");
  let t = document.createTextNode(item);
  li.className = "list-group-item";
  li.appendChild(t);
  list.appendChild(li);
  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    // Activating the (X) button
    let li = this.parentElement;
    li.style.display = "none";
    li.classList.remove("checked");
  };
}
