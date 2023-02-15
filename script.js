const nameEmployee = document.querySelector("#name-employee");
const employeeSignature = document.querySelector("#assinatura-funcionario");


nameEmployee.addEventListener("keyup", () => {
    employeeSignature.innerHTML = nameEmployee.value;
})