import React, { useEffect, useState } from 'react';
import Table from './components/table/Table';
import axios from 'axios';
import './app.scss'

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  position: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>([])  
  const [sortType, setSortType] = useState<number>(1)

  useEffect(() => {
    axios.get('http://localhost:3000/data')
    .then((res) => {
      setData(res.data)
      console.log(res.data, typeof res.data)
    })
    .catch((err) => 
      console.log(err)
    ) 
  }, []) 

  const clickHandler = () => {
    if(sortType === 1) {
      const sort: DataType[] = data.sort((a, b) => a.age - b.age);
      setData(sort)
      setSortType(2)
    }
    else{
      const sort: DataType[] = data.sort((a, b) => b.age - a.age);
      console.log(sort)
      setData(sort)
      setSortType(1)
    }
  }
  
  return (
    <>
      <button className='styled-button' onClick={clickHandler}>Sort</button>
      <Table props={data}></Table>
    </>
  )
}


export default App;