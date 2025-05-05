import React, { useEffect, useState } from "react";
import styles from './Table.module.scss'


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    position: string;
}

interface TableProps {
    props: DataType[]; 
  }

const Table: React.FC<TableProps> = ({props}) => {   
    
    const [data, setData] = useState<DataType[]>([])
    useEffect(() => {
        setData(props)
    }, [props]) 
    return (
        <>
          <table className={styles.table}>
            <thead>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Position</th>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.key}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                  <td>{item.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )
}

export default Table