import { useState } from 'react';
import './App.scss';
import ToDoForm from './component/ToDoForm';
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

  function onSubmit(data){
    const newData = {'id': datas[datas.length-1].id +1 || 0,'title': data};
    datas.push(newData);
    setDatas([...datas]);
  }

  return (
    <div className="app">
        <ToDoForm onSubmit = {onSubmit}></ToDoForm>
        <ToDoList 
          datas={datas}
          onClickData={onClickData} 
        >
        </ToDoList>
    </div>
  );
}

export default App;
