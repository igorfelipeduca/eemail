import Calendar from "@/components/calendar";
import EmailBadge from "@/components/email-badge";
import SectionDivider from "@/components/section-divider";
import StatsBadge from "@/components/stats-badge";
import { DayTime, emails } from "@/lib/emails";
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import { PiSunHorizonLight } from "react-icons/pi";

export default function Home() {
  const dayTimes = ["morning", "afternoon", "evening"];

  const getEmailsByDayTime = (dayTime: "morning" | "afternoon" | "evening") => {
    return emails.filter((email) => {
      const hour = email.sent_date.getHours();
      if (dayTime === "morning") {
        return hour >= 6 && hour < 12;
      } else if (dayTime === "afternoon") {
        return hour >= 12 && hour < 18;
      } else if (dayTime === "evening") {
        return hour >= 18 && hour < 24;
      }
      return false;
    });
  };

  return (
    <div className="h-screen w-screen px-6 py-8">
      <div className="max-w-[144rem] mx-auto lg:px-[10rem] flex flex-col gap-y-4">
        <div className="w-full flex items-center justify-between mx-auto">
          <div className="flex items-center gap-x-4 text-zinc-800">
            <h1 className="text-2xl font-semibold">today</h1>
          </div>

          <div className="flex items-center gap-x-2">
            <StatsBadge
              icon={<CheckIcon className="h-full w-full text-white" />}
              text="24"
            />

            <StatsBadge
              icon={
                <ClockIcon className="h-full w-full stroke-white text-[#BCB7B4]" />
              }
              text="1.5 of 7.5 hrs"
            />
          </div>
        </div>

        <div className="mt-4 mx-auto sm:mx-0">
          <Calendar />
        </div>

        <div className="mb-8">
          {dayTimes.map((dayTime) => (
            <div className="mt-8" key={dayTime}>
              <SectionDivider
                icon={<PiSunHorizonLight className="h-4 w-4" />}
                text={dayTime}
              />

              <div className="flex flex-col gap-y-4 mt-4">
                {getEmailsByDayTime(dayTime as DayTime).map((email) => (
                  <EmailBadge key={email.sent_date.getTime()} email={email} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
