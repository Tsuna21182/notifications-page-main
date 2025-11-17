import type { DataProps } from "../data/data";
import Comment from "./Comment";

type CardProps = {
  person: DataProps;
};

function Card({ person }: CardProps) {
  return (
    <div
      className={`p-5 flex items-center justify-between  relative rounded-md ${
        person.status === "pendiente" ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex gap-4">
        <img src={person.image} alt={person.name} className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <p className="font-bold hover:text-blue-800 cursor-pointer transition-colors duration-200">
            {person.name}
            <span className="font-normal text-slate-500 ml-2">
              {person.description}
              {person.highlight && (
                <span className="font-bold text-slate-600 hover:text-blue-800 cursor-pointer transition-colors duration-200 hover:font-black">
                  {person.highlight}
                </span>
              )}
            </span>
          </p>
          {person.status === "pendiente" ? (
            <p className="bg-red-500 w-2 h-2 rounded-full animate-ping absolute top-3 right-3"></p>
          ) : (
            ""
          )}
          <p className="text-slate-400 text-xs">{person.date}</p>
        </div>
      </div>
      {person.action && <Comment action={person.action} />}
    </div>
  );
}

export default Card;
