function code() {
  console.log("function called");
}

const x = document.getElementById("B");
x.onclick(e => {
  console.log("click called");
});

code();
