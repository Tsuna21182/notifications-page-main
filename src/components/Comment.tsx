import type { Action } from "../data/data";

type Props = {
  action: Action;
};

function Comment({ action }: Props) {
  if ("comment" in action) {
    return (
      <div>
        <img
          src={action.comment}
          alt="comment"
          className=" w-16 h-auto rounded-md cursor-pointer hover:opacity-80 transition"
        />
      </div>
    );
  }
}

export default Comment;
