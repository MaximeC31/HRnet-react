import { EmployeeTable } from "@maximec31/employee-table";

export const ViewEmployees = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  return <EmployeeTable data={employees} />;
};
