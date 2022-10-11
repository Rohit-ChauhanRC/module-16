import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //

  const {
    value: firstName,
    ValueChangeHandler: firstNameChangeHandler,
    hasError: firstNameHasError,
    isValid: firstNameValid,
    nameInputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    ValueChangeHandler: lastNameChangeHandler,
    hasError: lastNameHasError,
    isValid: lastNameValid,
    nameInputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    ValueChangeHandler: emailChangeHandler,
    hasError: emailHasError,
    isValid: emailValid,
    nameInputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!firstNameValid && !lastNameValid && !emailValid) {
      return;
    }
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control ";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email!</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
