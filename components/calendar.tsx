"use client";

import { useState } from "react";

export default function Calendar() {
  const [activeDate, setActiveDate] = useState(new Date());

  const parseDayNameAndNumber = (offset: number) => {
    const date = new Date(activeDate.getTime() + offset * 86400000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const dayNumber = date.getDate();
    return {
      name: dayName,
      number: dayNumber,
    };
  };

  return (
    <div className="flex gap-x-4 items-start">
      {Array.from({ length: 8 }, (_, i) => i).map((offset) => {
        const { name, number } = parseDayNameAndNumber(offset);
        return (
          <div
            className="flex flex-col items-start gap-2 text-zinc-500"
            key={offset}
          >
            <span>{name}</span>

            {number === activeDate.getDate() && offset === 0 ? (
              <span className="py-1 px-2 rounded-lg bg-[#F2EEED] text-zinc-600">
                {number}
              </span>
            ) : (
              <span
                className="py-1 px-2 transition-all duration-150 hover:bg-[#F2EEED] cursor-pointer rounded-lg"
                onClick={() =>
                  setActiveDate(
                    new Date(activeDate.getTime() + offset * 86400000)
                  )
                }
              >
                {number}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
