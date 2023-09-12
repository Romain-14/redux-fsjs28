import { createSlice } from "@reduxjs/toolkit";

// initialisation d'une state de base
const initialState = {
    info: {
        isLogged: false,
        alias: "john doe",
    },
};

// création des actions/reducers via un "slice"
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            console.log(action);
            // avec redux toolkit on peut "muter" une state directement car la librairie "Immer" (comprise avec l'installation de reduxjs/toolkit) s'occupe de gérer la "mutation"
            state.info = { isLogged: true, alias: action.payload };
        },
        signOut: (state, action) => {
            state.info = { isLogged: false, alias: "john doe" };
        },
    },
});

//  EXPORT
// export des méthodes du slice user, qu'on importera dans le composant requis afin de le dispatch dans le store -> dispatch(signIn(value))
export const { signIn, signOut } = userSlice.actions;

// export du slice qui contient les states dans la constante store du fichier store/index.js
export default userSlice.reducer;