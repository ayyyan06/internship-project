import React, { useEffect, useState } from "react";
import styles from './Table.module.scss';
import ReactPaginate from 'react-paginate';
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  position: string;
}

interface PageClickEvent {
  selected: number;
}

const Table: React.FC = () => {
  const state:any = useSelector((state:any) => state.filterSlice.sortType)
  const [data, setData] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [open, setIsOpen] = useState(false)
  const [obj, setObj] = useState<DataType | null>(null)
  const itemsPerPage: number = 5;

  useEffect(() => {
    console.log('new state: ', state)
    setData(state.table)
  },[state])

  useEffect(() => {
    console.log('props updated:');
    setCurrentPage(0);  
  }, []);

  const handlePageClick = (event: PageClickEvent): void => {
    console.log('page changed to:', event.selected);  
    setCurrentPage(event.selected);
  };

  const openModal = (data:any) => {
    setObj(data)
    console.log(obj)
    setIsOpen(true)
  }

  const handleClose = () => {
    console.log('closed')
    setIsOpen(false)
    console.log(open)
  }

  const startOffset = currentPage * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const currentItems = data.slice(startOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.key}>
                <td>
                  <button className={styles.modalBtn} onClick={() => openModal(item)}>
                    {item.name}
                  </button>
                </td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && obj !== null && <Modal item={obj} onClose={handleClose}/>}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </>
  );
};

export default Table;
