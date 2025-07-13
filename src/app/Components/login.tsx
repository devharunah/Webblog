'use client';
import { useRouter } from "next/navigation";
const Login = () => {
    const router = useRouter();
    return(
         <div>
            <form>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold mb-4">Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-2 mb-4 w-64"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 mb-4 w-64"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                    <p>Don't have account <span
                    onClick={ ()=>{router.push("/signup")}}
                     className="font-bold text-blue-500 cursor-pointer " >signup</span> </p>
                </div>
            </form>
    </div>
    )
}
export default Login;