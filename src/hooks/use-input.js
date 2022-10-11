import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const ValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError: hasError,
    isValid: valueIsValid,
    ValueChangeHandler,
    nameInputBlurHandler,
    reset,
  };
};

export default useInput;
