import React, { useEffect, useState } from 'react';
import Table from './components/table/Table';
import Sort from './components/sort/Sort';
import axios from 'axios';
import './app.scss'
import { useSelector } from 'react-redux';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  position: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>([])  
  const sort:any = useSelector((state:any) => state.filterSlice.sortType)

  useEffect(() => {
    axios.get('http://localhost:3000/data')
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => 
      console.log(err)
    ) 
  }, []) 

  useEffect(() => {
    console.log('sort: ', sort)
    if(sort === 'age (ascending)') {
      const sort: DataType[] = data.sort((a, b) => a.age - b.age);
      setData(sort)
    }
    else{
      const sort: DataType[] = data.sort((a, b) => b.age - a.age);
      setData(sort)
    }
  }, [sort])

  return (
    <>
      <h1 style={{padding: '50px 0 0 50px', fontFamily: 'Segoe UI'}}>Workers Table</h1>
      <Sort />
      <Table props={data}></Table>
    </>
  )
}


export default App;