import Form from "./components/form";
import List from "./components/list";

export default async function Home() {

  return (
    <main className="flex flex-col items-center w-full p-24">
      <h1 className="text-5xl font-bold animation animate-pulse">Todos Page</h1>
      <Form />
      <List />
    </main>
  );
}
