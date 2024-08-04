import { Email } from "@/lib/emails";

interface EmailBadgeProps {
  email: Email;
}

export default function EmailBadge({ email }: EmailBadgeProps) {
  return (
    <div className="p-4 rounded-2xl bg-[#f1eeec] flex items-start sm:items-center justify-between">
      <div className="flex gap-x-2 items-start sm:items-center">
        <div className="w-4 h-4 rounded-md border-[1.3px] border-zinc-400 bg-white" />

        <h3 className="text-sm -mt-1 sm:mt-0 w-[15rem] sm:w-auto text-zinc-600">
          <strong className="text-zinc-700">
            {email.sent_from.toLowerCase()}:{" "}
          </strong>
          {email.title.toLocaleLowerCase()}
        </h3>
      </div>

      <div className="rounded-full p-1 bg-white w-12 text-center flex justify-center items-center">
        <span className="text-[0.6rem]">50 min</span>
      </div>
    </div>
  );
}
