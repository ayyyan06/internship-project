import React, { useState } from "react";
import styles from "./Sort.module.scss";
import { setSort } from "../../redux/Slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Sort: React.FC = () => {
  const dispatch = useDispatch()  
  const value = useSelector((state: any) => state.filterSlice.sortType)
  console.log(value)
  const [sortType, setSortType] = useState<string>('none');
  const [open, setOpen] = useState<boolean>(false);
  const sortArr: String[] = [ "age (ascending)", "age (descending)" ];

  const clickHandler: any = (e:any) => {
    dispatch(setSort(e.target.textContent))
    setSortType(e.target.textContent)
  };
  const openHandler: VoidFunction = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortlabel}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <span>Sort by: </span>
        <button className={styles.btn} onClick={openHandler}>
          {sortType}
        </button>
      </div>
      {open && (
        <ul>
          {sortArr.map((item) => (
            <li>
              <button onClick={clickHandler}>{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
