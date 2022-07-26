import { useState, useEffect } from "react";
const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("page rendered");
  }, [count]);

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>increase</button>
      <button onClick={()=>{setCount(count-1)}}>decrease</button>
      <button onClick={()=>{setCount(0)}}>set to zero</button>
      {count}
    </div>
  );
};

export default Count;
