// Get pokemon with fetch from api with limit 151 and offset 0

import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemon = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data: PokemonsResponse = await res.json();

    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
}


export default async function PokemonPage() {
    const pokemon = await getPokemon();
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl text-center">Pokemons</h1>
            <div className="grid grid-cols-4 gap-4">
                {pokemon.map((p) => (
                    <div key={p.id} className="flex flex-wrap gap-10 items-center justify-center ">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                            width={100}
                            height={100}
                            alt="name"
                        />
                    </div>
                ))}
            </div>
            
        </div>
    );
}



{/* 
<div key={p.id} className="flex flex-wrap gap-10 items-center justify-center ">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                            width={200}
                            height={200}
                            alt="name"
                        />
                    </div> */}