import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    
    setFormState(() => ({ ...formState, [name]: value }));
  };

  const handleReset = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    handleInput,
    handleReset,
  };
};
