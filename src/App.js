import logo from './logo.svg';
import './App.css';
import Add from './components/add';
import { useState } from 'react';
import Display from './components/Display';
import {v4 as uuidv4} from 'uuid'
import card from './components/card'


function App() {
 

  const [list, setlist] = useState([]);

  const addName = (name, surname, number, employeeid) => {

    if (name == "" && surname == "" && number == "") {

      alert("please enter employeelist");
    } else {
      let employeeName = {
        name: name,
      };
      setlist((list) => [...list, { name: name, surname: surname, number: number, employeeid:employeeid,id: uuidv4() }]);
      console.log(list)
    }
  };

  const deleteItem = ((i) => {
    let id = list.filter(list => list.id !== i)
    setlist(id)

  })


  return (
    <div className="container">
      <Add add={addName} />
      <Display data={list} delet={deleteItem}/>
    </div>

  );
}

export default App;
