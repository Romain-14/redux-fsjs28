import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn } from "../store/slices/user";

function Signin() {
    const navigate = useNavigate();
    const [alias, setAlias] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signIn(alias));
        navigate("/dashboard");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <input type="submit" value="se connecter" />
        </form>
    );
}

export default Signin;
