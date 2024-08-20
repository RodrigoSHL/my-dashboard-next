"use client";
import React from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeart } from 'react-icons/io5';

export const PokemonContainer = () => {

    const pokemonsFavorites = useAppSelector(state => state.pokemons)
    const pokemonArray: SimplePokemon[] = Object.values(pokemonsFavorites);

    return (<>

        {pokemonArray.length > 0 ? <PokemonGrid pokemons={pokemonArray} /> : <NoFavorites />}
    </>
    )
}



export const NoFavorites = () => {
    return (
        <div className="p-2 flex flex-col items-center justify-center">
            <IoHeart size={50} className="text-red-500" />
            <span className="text-2xl my-2">No hay pokémons favoritos</span>
        </div>
    );
}