import React, { useEffect, useState } from "react";
import styles from './Table.module.scss';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

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

interface PageClickEvent {
  selected: number;
}

const Table: React.FC<TableProps> = ({ props }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage: number = 5;

  useEffect(() => {
    console.log('new render')

  },[data])

  useEffect(() => {
    console.log('props updated:', props);
    setData(props);
    setCurrentPage(0);  
  }, [props]);

  const handlePageClick = (event: PageClickEvent): void => {
    console.log('page changed to:', event.selected);  
    setCurrentPage(event.selected);
  };

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
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
