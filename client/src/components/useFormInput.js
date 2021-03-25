import { useState } from "react";


export const useFormInput = (initialValue, label = "", required = true) => {
  const [value, setValue] = useState(initialValue);

 
  return {
    required,
    label,
    placeholder: `Enter ${label}`,
    value,
    onChange: (e) => setValue(e.target.value),
  };
};