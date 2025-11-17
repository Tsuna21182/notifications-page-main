import type { DataProps } from "../data/data";

type HeaderProps = {
  pendiente: DataProps[];
};

function Header({ pendiente }: HeaderProps) {
  const pendientesCount = pendiente.filter(
    (item) => item.status === "pendiente"
  ).length;

  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <h3 className="text-2xl font-bold">Notifications</h3>
        {pendientesCount > 0 && (
          <p className="bg-blue-950 text-white py-1 px-2.5 rounded-lg text-xs">
            {pendientesCount}
          </p>
        )}
      </div>
      <p className="text-slate-400 font-bold hover:text-blue-800 cursor-pointer transition-colors duration-200">
        Mark all as read
      </p>
    </header>
  );
}

export default Header;
