import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PokemonFavorite {
    [key: string]: SimplePokemon;
}

const initialState: PokemonFavorite = {
    '1': {id: '1', name: 'bulbasaur'},
    '2': {id: '2', name: 'ivysaur'},

};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const { id, name } = action.payload;
      if (state[id]) {
        delete state[id];
      } else {
        state[id] = { id, name };
      }
    }
  },
});

export const {toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
