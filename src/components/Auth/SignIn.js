import navihealth from "../../assets/navilogo.png";
import { XIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { NavContext } from "../../contexts/navContext";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
const SignIn = () => {
    const {status, functions} = useContext(NavContext)
  return (
    <div className={`w-full ${status.login.loginModalOpen? "": "hidden"} absolute`}>
      <div className="flex w-11/12 mx-auto justify-end">
        <div className="w-4/12 p-10 bg-white shadow-2xl rounded-3xl">
          <header className="flex mb-8 items-center justify-between">
            {/* logo */}
            <img className="w-3/5 h-8" src={navihealth} alt="logo" />
            {/* closebutton */}
            <XIcon onClick={()=>{
                functions.closeModal(status.login.setLoginModalOpen)
            }} className="cursor-pointer w-6 h-6 font-black" />
          </header>
          <main className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h2 className="font-bold text-gray-700 text-2xl">
                Welcome To Navihealth
              </h2>
              <p>
                New Here?
                <a
                  href="#"
                  className="text-green-free ml-2 underline font-semibold"
                >
                  Create An Account
                </a>
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-gray-free-2">Email</label>
              <input className="inputlogin" type="text" />
            </div>
            <div className="space-y-1">
              <label className="text-gray-free-2">Password</label>
              <input className="inputlogin" type="password" />
            </div>
            <section className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="cursor-pointer form-checkbox border-2 border-gray-400 text-green-free rounded-sm focus:ring-green-free"
                />
                <p className="text-sm">Remember This Device</p>
              </div>
              <div className="items-center text-sm text-green-free font-semibold">
                <p>Forgot Your Password ?</p>
              </div>
            </section>
            <hr />
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-free">Are You A Facility?</p>
                <a href="#" className="text-green-free underline font-bold">
                  Sign In Here
                </a>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-free">Are You A Provider?</p>
                <a href="#" className="text-green-free underline font-bold">
                  Sign In Here
                </a>
              </div>
            </section>
            <input
              type="submit"
              className="w-full text-center text-white bg-green-free py-2 rounded"
              value="Login"
            />
            <div className="items-center">
              <div className="word-btw">
                <span>Or Login In With </span>
              </div>
            </div>
          </main>
          <footer className="flex justify-between mt-4 items-center">
            <button className="flex text-gray-500 font-bold bg-white px-5 py-2 shadow-sm rounded-md text-sm items-center">
              <img
                className="w-7 h-7 mr-2"
                src="https://img.icons8.com/color/48/000000/google-logo.png"
              />{" "}
              Google
            </button>
            <button className="flex text-white bg-facebook font-bold px-5 py-2 rounded-md text-sm items-center">
              <AiFillFacebook className="w-7 h-7 rounded-xl mr-2 text-white" />{" "}
              Facebook
            </button>
            <button className="flex text-white bg-twitter font-bold px-5 py-2 rounded-md text-sm items-center">
              <AiOutlineTwitter className="w-7 h-7 mr-2 text-white" /> Twitter
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
