import React, {useState} from 'react'
import './App.css';
import { CheckboxWrapper } from './components/checkboxWrapper';

function App() {

  const [checkBoxs, setCheckBoxs ] = useState([
    { 
      id: "checkboxOne", 
      isChecked: false 
    },
    { 
      id: "checkboxTwo",  
      isChecked: false 
    },
    { 
      id: "checkboxthree",  
      isChecked: false 
    },
    { 
      id: "checkboxFour",  
      isChecked: false 
    }
  ])

  const onClickCheckbox = (event) => {

    const newCheckBoxsStore = checkBoxs.map(checkbox => {
      if (checkbox.id === event.target.value)
      {
        checkbox.isChecked = event.target.checked
      }

      return checkbox
    })

    setCheckBoxs(newCheckBoxsStore)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          {
            checkBoxs.map((box) => {
              return (
                <CheckboxWrapper 
                  key={box.id} 
                  onClickCheckbox={onClickCheckbox}  
                  {...box}
                />
              )
            })
          }
        </div>
        {
          checkBoxs.every(e => e.isChecked === true) && <p>Nous sommes tous à TRUE</p>
        }
      </header>
    </div>
  );
}

export default App;