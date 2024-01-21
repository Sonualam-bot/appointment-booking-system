import dayjs from "dayjs";
import { createContext, useState } from "react";

export const CalenderContext = createContext();

export const CalenderContextProvider = ({ children }) => {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const value = {
    today,
    setToday,
    selectDate,
    setSelectDate,
  };

  return (
    <CalenderContext.Provider value={value}>
      {children}
    </CalenderContext.Provider>
  );
};
