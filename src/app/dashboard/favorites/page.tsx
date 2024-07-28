import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { SimplePokemon, PokemonsResponse } from "../../../pokemons";


export const metadata = {
 title: 'Pokemons Favorites',
 description: 'Pokemons',
};


export default async function PokemonsPage() {
  
  return (
    <div className=" p-2 flex flex-col">

      <span className="text-2xl my-2">Listado de Pokémons <small>estático</small></span>
      
      <PokemonGrid pokemons={ [] } />

    </div>
  );
}