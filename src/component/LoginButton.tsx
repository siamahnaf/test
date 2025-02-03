"use client"
import { signIn } from "@/auth/actions";

const LoginButton = () => {

    const onLogin = async () => {
        await signIn();
    }

    return (
        <div>
            <button className="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-md" onClick={onLogin}>
                Login To Dashboard
            </button>
        </div>
    );
};

export default LoginButton;