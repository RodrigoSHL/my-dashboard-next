import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { SimplePokemon, PokemonsResponse } from "../../../pokemons";
import { PokemonContainer } from "@/pokemons/components/PokemonContainer";


export const metadata = {
  title: 'Pokemons Favorites',
  description: 'Pokemons',
};


export default async function PokemonsPage() {

  return (
    <div className=" p-2 flex flex-col">

      <span className="text-2xl my-2">Pokémons favoritos <small>global</small></span>
     {

      }
    </div>
  );
}
