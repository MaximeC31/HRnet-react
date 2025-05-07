export const createEmployee = (employee) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  for (let i = 0; i < 5; i++) {
    employees.push(employee);
  }

  localStorage.setItem("employees", JSON.stringify(employees));
  return true;
};
