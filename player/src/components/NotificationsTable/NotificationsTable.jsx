import React, { useMemo, useState } from 'react'
// Styles
import {InputDate, Wrapper} from "./NotificationsTable.styles"
import { formatDateMDY } from '../../utils/utils';
import { usePagination, useTable } from 'react-table';
import Pagination from '../Pagination/Pagination';
const NotificationsTable = () => {
  const [data, setData] = useState([
    {
      title: "Regular Maintenance",
      content:
        "Dear Valued Customer: In order to serve you better, we plan to have a server maintenance on 04-05-2023 07:00-07:05 (GMT+8) During the maintenance period, all the games and kiosk will not be able to login.",
      date: "5/3/2023, 2:29:40 PM",
    },
  ]);
 const columns = useMemo(
   () => [
     {
       Header: "Main title",
       accessor: "title",
     },
     {
       Header: "Content",
       accessor: "content",
     },
     {
       Header: "Date",
       accessor: "date",
     },
   ],
   []
 );

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   prepareRow,
   page,
   pageOptions,
   gotoPage,
   state: { pageIndex },
 } = useTable(
   {
     columns,
     data,
     initialState: { pageIndex: 0 },
   },
   usePagination
 );

 return (
   <Wrapper>
     <table {...getTableProps()}>
       <thead>
         {headerGroups.map((headerGroup) => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map((column) => (
               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
             ))}
           </tr>
         ))}
       </thead>
       {data.length ? (
         <>
           <tbody {...getTableBodyProps()}>
             {page.map((row, i) => {
               prepareRow(row);
               return (
                 <tr {...row.getRowProps()}>
                   {row.cells.map((cell) => {
                     if (cell.column.Header === "Date") {
                       return (
                         <td {...cell.getCellProps()}>
                           {formatDateMDY(cell.value)}
                         </td>
                       );
                     } else {
                       return (
                         <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                       );
                     }
                   })}
                 </tr>
               );
             })}
           </tbody>
         </>
       ) : (
         <tbody>
           <tr>
             <td colspan="6" style={{ textAlign: "center" }}>
               No data found
             </td>
           </tr>
         </tbody>
       )}
     </table>
     {/* <Pagination
       currentPage={pageIndex + 1}
       totalPages={pageOptions.length}
       onPageChange={gotoPage}
     /> */}
   </Wrapper>
 );
}

export default NotificationsTable