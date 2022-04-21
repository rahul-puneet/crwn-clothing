import { signInWithGoolePopup, createUserDocFromAuth } from "../../util/firebase.util"

const SignIn = () => {
    const logGoogle = async () => {
        const { user } = await signInWithGoolePopup();
        const userDocRef = await createUserDocFromAuth(user);

    }
    return (
        <div>
            <button onClick={logGoogle}>Sign In with Google </button>
        </div>
    )
}

export default SignIn