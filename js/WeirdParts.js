// alert('weird Parts');

function b() {
  let myVar;
  console.log(myVar);
}

function a() {
  const myVar = 2;
  console.log(myVar);
  b();
}

const myVar = 1;
a();

// Execution Context
