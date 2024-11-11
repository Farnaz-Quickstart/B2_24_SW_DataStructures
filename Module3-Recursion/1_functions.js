function func_A(my_var) {
  console.log (`function A ${my_var}`)
  func_B(1)
}

function func_B(my_var) {
  console.log (`function B ${my_var}`)
  func_C(1)
}

function func_C(my_var) {
  console.log (`function C ${my_var}`)
  func_D(1)
}

function func_D(my_var) {
  console.log (`function D ${my_var}`)
  debugger;
  if (my_var == 1) return;
  func_A(1)
}

func_A(1)