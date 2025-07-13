'use client';
import Image from "next/image";
import {useRouter} from "next/navigation";
const Landing = () => {
    const router = useRouter();
    return (
        <div>
           <div className="w-full h-[10vh] fixed top-0 px-5 py-5 justify-between flex bg-blue-100" >
            <div>
                <h1 className="font-bold text-lg sm:text-3xl" >Blog post</h1>
            </div>
            <div className="space-x-10" >
                <button
                  onClick={ ()=>{router.push("/signup")}}
                 className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">
                    signin
                    </button>
                     <button
                       onClick={ ()=>{router.push("/login")}}
                     className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">
                    Login
                    </button>
            </div>
           </div>
            <div className="py-10 px-10" >
                <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mt-[10vh]">
                    Welcome to Our Blog
                    </h1>
                <Image
                    src="/images/landing.jpg"
                    alt="Landing Image"
                    width={500}
                    height={500}
                    className="w-full h-[90vh] object-cover mt-[10vh]"
                />
            </div>
            <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mt-10">
                    Explore Our Latest Posts,
                    </h1>
                    <div className="flex justify-center pt-10 items-center" >
                     <div className="grid w-[50vw] gap-10 space-x-10 justify-center grid-cols-1 sm:grid-cols-4" >
                        <div>
                              <Image
                    src="/images/robot.jpg"
                    alt="Landing Image"
                    width={600}
                    height={600}
                    
                />
                <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing eli</p>
                        </div>
                         <div>
                              <Image
                    src="/images/landing.jpg"
                    alt="Landing Image"
                    width={500}
                    height={500}
                />
                <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing eli</p>
                        </div>
                         <div>
                              <Image
                    src="/images/landing.jpg"
                    alt="Landing Image"
                    width={500}
                    height={500}
                />
                <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing eli</p>
                        </div>
                    </div>
                    </div>
                   
            </div>
        </div>
    );
}
export default Landing ;