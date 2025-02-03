"use client"
import { signOut } from "@/auth/actions";

const Logout = () => {
    //const [state, loginAction] = useActionState(signIn, undefined);

    const onLogout = async () => {
        await signOut();
    }

    return (
        <div>
            <button className="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-md" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default Logout;