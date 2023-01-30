import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState(" ");

   const handleFormSubmit = (event) => {
    event.preventDefault()                 
 
    onSubmit(term);

   };
   
   const handleChange = (event) => { // By setting the value in the input to piece of state(term) we are taking control from the 
                                     // browser and assigning it to the state system where react controls what happens inside of input
      setTerm(event.target.value);   
   };                                  
    return (
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
        <label className="label">Enter Search Term</label>
          <input value={term} onChange={handleChange} /> 
        </form>
         
       
      </div>
    );
}
       // controlled input is any input with a value prop and onChange prop
export default SearchBar;