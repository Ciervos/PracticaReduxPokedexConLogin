const InitialState = {
  name: "Pika",
  pass: "chu",
  log: false,

};

export const usuario = (state = InitialState, action) => {
  switch (action.type) {
    case "checkUser":
      if(action.maestro===state.name && action.contra===state.pass){
      console.log("correcto")
      return {
        ...state,
       log: true,
          };
      }else{
        return {
          ...state
            };
      }   
    default:
      return state;
  }
};