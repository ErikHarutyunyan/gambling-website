import React, { useCallback, useEffect, useState } from 'react'
// Styles
import {InputDate, Wrapper} from "./DayCustom.styles"
import { formatDateMDY } from '../../utils/utils';
import { CloseIcon } from '../Icons/Icons';

const DayCustom = ({onCustom}) => {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
    useEffect(() => {
      if (dateIn || dateOut) {
        filterDate({ date: dateIn, date2: dateOut });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateIn, dateOut]);

    const filterDate = useCallback(
      ({ date = "", date2 = "" }) => {
        const compareDates = ({ d1, d2, d3 }) => {
          let date1 = d1 ? new Date(d1).getTime() : -8640000000000000;
          let date2 = new Date(d2).getTime();
          let date3 = d3 ? new Date(d3).getTime() : 8640000000000000;

          if (date1 <= date2 && date3 >= date2) {
            return true;
          }
        };

        // const newDate = data.filter((item) =>
        //   compareDates({
        //     d1: date,
        //     d2: formatDateMDY(item.dob.date),
        //     d3: date2,
        //   })
        // );
        // setData(newDate);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dateIn, dateOut,]
    );
  return (
    <Wrapper>
      <InputDate>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => setDateIn(e.target.value)}
        />
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => setDateOut(e.target.value)}
        />
      </InputDate>
      <CloseIcon onClick={onCustom} />
    </Wrapper>
  );
}

export default DayCustom