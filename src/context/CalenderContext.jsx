import dayjs from "dayjs";
import { createContext, useEffect, useState } from "react";

export const CalenderContext = createContext();

export const CalenderContextProvider = ({ children }) => {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  const fetchSlotsForBooking = async () => {
    try {
      const url =
        "https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30";
      const response = await fetch(url);
      const data = await response.json();
      setAvailableSlots(data);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  };

  const value = {
    today,
    setToday,
    selectDate,
    setSelectDate,
    availableSlots,
    selectedSlotIndex,
    setSelectedSlotIndex,
  };

  useEffect(() => {
    fetchSlotsForBooking();
  }, []);

  return (
    <CalenderContext.Provider value={value}>
      {children}
    </CalenderContext.Provider>
  );
};
