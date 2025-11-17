import type { Action } from "../data/data";

type Props = {
  action: Action;
};

function Message({ action }: Props) {
  if ("message" in action) {
    return (
      <div className="p-4 border border-slate-200 rounded-lg bg-white text-slate-700 text-sm leading-snug cursor-pointer hover:bg-blue-50 transition ml-20 -mt-2">
        {action.message}
      </div>
    );
  }
}

export default Message;
