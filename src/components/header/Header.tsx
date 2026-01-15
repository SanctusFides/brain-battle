import {Link} from "react-router-dom";

import HeaderTopRowButton from "./HeaderTopRowButton.tsx";
import HeaderBottomRowButton from "./HeaderBottomRowButton.tsx";

export default function Header() { 
  return (
  <header className="mt-5 ml-5 mr-5">
    <div className="flex justify-between">
      <Link to={"/"}>
        <h1 className="">Brain Battles</h1>
      </Link>
      <div className="flex flex-col justify-center">
        <div className="flex gap-2">
          <h4 className={"mt-0.5"}>|</h4>

          <HeaderTopRowButton content={"Login"} className="font-semibold" aria-label={"login button"} />
          <h4 className={"mt-0.5"}>|</h4>

          <Link to={"/signup"} >
            <HeaderTopRowButton content={"Sign Up"} className="font-semibold" aria-label={"sign up button"}>
            </HeaderTopRowButton>
          </Link>


          <input placeholder="SEARCH TOURNAMENTS" className="bg-[#005573] p-1 w-72"></input>
        </div>
      </div>
    </div>
    <div className="flex justify-end gap-4">
      <HeaderBottomRowButton content={"Home"} className="w-[106px] font-semibold"/>
      <HeaderBottomRowButton content={"Circuits"} className="w-[106px] font-semibold"/>
      <HeaderBottomRowButton content={"Paradigms"} className="w-[106px] font-semibold"/>
      <HeaderBottomRowButton content={"Help"} className="w-[106px] font-semibold"/>
      <HeaderBottomRowButton content={"About"} className="w-[106px] font-semibold"/>
    </div>
  </header>
  );
}