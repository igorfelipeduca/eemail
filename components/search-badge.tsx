import {
  MagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { CheckboxIcon } from "@radix-ui/react-icons";

export default function SearchBadge() {
  return (
    <div className="bottom-5 fixed z-50 flex justify-center w-full h-12">
      <div className="py-2 px-4 rounded-full bg-black flex items-center justify-center gap-x-4">
        <MagnifyingGlassIcon className="h-5 w-5 text-white cursor-pointer" />

        <div className="p-1 rounded-full flex items-center justify-center bg-[#232323]">
          <CheckboxIcon className="h-6 w-6 text-white cursor-pointer" />
        </div>

        <PencilIcon className="h-5 w-5 text-white cursor-pointer" />
        <PlusIcon className="h-6 w-6 text-white cursor-pointer" />
      </div>
    </div>
  );
}
