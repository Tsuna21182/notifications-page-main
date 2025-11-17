import Card from "./components/Card";
import Header from "./components/Header";

import { Data } from "./data/data";
import Message from "./components/Message";

function App() {
  return (
    <>
      <main className="p-5 md:flex md:justify-center md:items-center md:h-dvh">
        <section className="flex flex-col gap-3 md:bg-white md:max-w-2xl md:rounded-xl md:p-8 md:shadow-xl">
          <Header pendiente={Data} />

          {Data.map((person) => (
            <div key={person.id}>
              <Card person={person} />
              {person.action && <Message action={person.action} />}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
