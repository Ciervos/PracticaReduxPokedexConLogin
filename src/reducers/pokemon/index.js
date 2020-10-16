const InitialState = {
  input: "",
  number: 0,
  name: "missigno",
  sprite: "",
};

export const pokemon = (state = InitialState, action) => {
  switch (action.type) {
    case "searchPokemon":
      return {
         ...state,
         input: action.poke,
         number: action.poke.id,
         name: action.poke.name,
         sprite: action.poke.sprites.front_default,
          };
    default:
      return state;
  }
};