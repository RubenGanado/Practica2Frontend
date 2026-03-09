'use client'
import { buscarBebidas } from "@/api/bebida";
import { CoctailCard } from "@/components/CoctailCard";
import { Bebidas } from "@/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {

  const router = useRouter();

  const [text, setText] = useState<string>("");
  const [drinks, setDrinks] = useState<Bebidas[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (!name) return;
    buscarBebidas(name).then(setDrinks);
  }, [name]);

  const randomCocktail = async () => {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const data = await res.json();

    const id = data.drinks[0].idDrink;

    router.push(`/${id}`);
  };

  return (
    <div>
      <h1>Buscar cóctel: </h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setName(text)}>Buscar</button>
      <button onClick={randomCocktail}>Dime algo bonito</button>

      {drinks.map((d) => (
        <CoctailCard key={d.idDrink} bebida={d} />
      ))}
    </div>
  );
}

export default Home;