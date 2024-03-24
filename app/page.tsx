import Image from "next/image";
import Check from "./components/Check";
import PokemonLv from "./components/PokemonLv";
import PokemonPersonality from "./components/PokemonPersonality";
import PokemonSkill from "./components/PokemonSkill";
import PokemonBonus from "./components/PokemonBonus";
import PokemonList from "./components/PokemonList";
import { getALLTodos } from "./api";

export default async function Home() {
  const todos = await getALLTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-850 ">
        PokemonSleep
      </h1>
      <h2>
        ポケモンのおてスピをチェックしよう！！
      </h2>
      <div className="w-hull max-w-xl mt-5">
        <div className="w-hull px-8 py-6 bg-white shadow-md rounded-lg">
          <Check />
          {/* <PokemonLv /> */}
          {/* <PokemonPersonality/> */}
          {/* <PokemonSkill /> */}
          {/* <PokemonBonus /> */}
          <PokemonList todos={todos} />
        </div>
      </div>
    </main>
  );
}