import React, { useState } from 'react'
// Styles
import { SelectWrap } from "./CalendarDay.styles";
import SelectCustom from '../SelectCustom'
import DayCustom from '../DayCustom/DayCustom'
import { selectDate } from '../../utils/date'
const CalendarDay = () => {
  const [customDate,setCustomDate] = useState(false)
  // const [valueDate,setValueDate] = useState("")

  return (
    <>
      {!customDate ? (
        <SelectWrap>
          <SelectCustom onCustom={() => setCustomDate((prev) => !prev)} date={selectDate} activeData={'Today'}/>
        </SelectWrap>
      ) : (
        <DayCustom onCustom={() => setCustomDate((prev) => !prev)} />
      )}
    </>
  );
}

export default CalendarDay