import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const [listOfNames, setListOfNames] = useState([]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setListOfNames([...listOfNames, name]);
          setName("");
    
        }}
      >
        Add Name
      </button>
      <h2>random people name</h2>
      {listOfNames.map((name, key) => (
        <h3 key={key}>{name}</h3>
      ))}
    </div>
  );
};

export default Name;
