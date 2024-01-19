import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedValues) => {

    setSelectedOptions(selectedValues);
  };


  return (
    <div className="App">
      <div>
      <h2>Multi-Select Example</h2>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
      />
     
    </div>
      
    </div>
  );
}

export default App;

