import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { states } from "../database/states";
import { departments } from "../database/departments";
import { ConfirmModal } from "./confirmModal";
import { createEmployee } from "../utils/employeesHandler";

export const EmployeeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const employeeData = Object.fromEntries(formData);

    const success = createEmployee(employeeData);

    if (success) {
      setIsModalOpen(!isModalOpen);
    } else {
      alert("Erreur lors de l'ajout de l'employé");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
    formRef.current.reset();
    navigate("/employee-list");
  };

  return (
    <>
      <section className="employee-form">
        <h2 className="employee-form__title">Create Employee</h2>
        <form
          ref={formRef}
          action="#"
          id="create-employee"
          className="employee-form__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="first-name" className="employee-form__label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            className="employee-form__input"
            required
          />

          <label htmlFor="last-name" className="employee-form__label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            className="employee-form__input"
            required
          />

          <label htmlFor="date-of-birth" className="employee-form__label">
            Date of Birth
          </label>
          <input
            id="date-of-birth"
            type="date"
            name="dateOfBirth"
            className="employee-form__input"
            required
          />

          <label htmlFor="start-date" className="employee-form__label">
            Start Date
          </label>
          <input
            id="start-date"
            type="date"
            name="startDate"
            className="employee-form__input"
            required
          />

          <fieldset className="employee-form__address">
            <legend className="employee-form__legend">Address</legend>

            <div className="employee-form__field">
              <label htmlFor="street" className="employee-form__label">
                Street
              </label>
              <input
                id="street"
                type="text"
                name="street"
                className="employee-form__input"
                required
              />
            </div>

            <div className="employee-form__field">
              <label htmlFor="city" className="employee-form__label">
                City
              </label>
              <input id="city" type="text" name="city" className="employee-form__input" required />
            </div>

            <div className="employee-form__field employee-form__field--select">
              <label htmlFor="state" className="employee-form__label">
                State
              </label>
              <div className="employee-form__select-wrapper">
                <select
                  name="state"
                  id="state"
                  className="employee-form__select"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="employee-form__select-icon" />
              </div>
            </div>

            <div className="employee-form__field">
              <label htmlFor="zip-code" className="employee-form__label">
                Zip Code
              </label>
              <input
                id="zip-code"
                type="number"
                name="zipCode"
                className="employee-form__input"
                required
              />
            </div>
          </fieldset>

          <div className="employee-form__field employee-form__field--select">
            <label htmlFor="department" className="employee-form__label">
              Department
            </label>
            <div className="employee-form__select-wrapper">
              <select
                name="department"
                id="department"
                className="employee-form__select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Department
                </option>
                {departments.map((department) => (
                  <option key={department.name} value={department.name}>
                    {department.name}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon icon={faChevronDown} className="employee-form__select-icon" />
            </div>
          </div>

          <button type="submit" className="employee-form__save-button">
            Save
          </button>
        </form>
      </section>

      {isModalOpen ? <ConfirmModal onClose={handleCloseModal} /> : null}
    </>
  );
};
