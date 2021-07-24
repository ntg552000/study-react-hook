import { useState } from 'react';
import './App.scss';
import ToDoList from './component/ToDoList';


function App() {
  const [datas,setDatas] = useState([
      {'id':1, 'title':"content 1"},
      {'id':2, 'title':"content 2"},
      {'id':3, 'title':"content 3"},
  ]);

  function onClickData(data){
    removeElement(datas,data);
  }

  function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
      setDatas([...array]);
    }
  }

  return (
    <div className="app">
        <ToDoList 
          datas={datas}
          onClickData={onClickData} 
        >
        </ToDoList>
    </div>
  );
}

export default App;
