import React, { useEffect, useState } from "react";
import { useWeatherContext } from "../../Context.js";
import { DayCard } from "../DayCard";

export function WeekInfo() {
  const { daily, setCurrent } = useWeatherContext();
  const [selectedCard, setSelectedCard] = useState(0);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setCurrent(daily[selectedCard]);
  }, [daily]);

  return (
    <div className="week-container">
      <ul className="week-list">
        {daily.map((item, index) => {
          if (index < 3)
            return (
              <DayCard
                className={index === selectedCard ? "active" : ""}
                onClick={() => {
                  setSelectedCard(index);
                  setCurrent(item);
                }}
                key={index}
                item={item}
              />
            );
        })}
        <div className="clear"></div>
      </ul>
      
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>

      {visible && 
      <ul className="week-list" id ='hidden-set'>
        {daily.map((item, index) => {
          if (index < 7 && index > 2)
            return (
              <DayCard
                className={index === selectedCard ? "active" : ""}
                onClick={() => {
                  setSelectedCard(index);
                  setCurrent(item);
                }}
                key={index}
                item={item}
              />
            );
        })}
        <div className="clear"></div>
      </ul>
      }

      
    </div>
  );
}