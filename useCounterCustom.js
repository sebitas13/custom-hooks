import { useState } from "react"


export const useCounterCustom = ( initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => {
    setCounter(counter+value);
  }

  const decrement = (value) =>{
    if(counter===1) return;

    setCounter(counter-value);
  }
  
  const reset = () => {
    setCounter(initialValue);
  }

  return (
    {
        counter : counter,
        increment : increment,
        decrement,
        reset
    }
  )
}
