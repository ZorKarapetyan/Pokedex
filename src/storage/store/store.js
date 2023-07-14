import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "../slice/slice";

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
