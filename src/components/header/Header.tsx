import HeaderTopRowButton from "./HeaderTopRowButton.tsx";

export default function Header() { 
  return (
  <header className="m-5">
    <div className="flex justify-between">
      <h1 className="">Brain Battles</h1>
      <div className="flex flex-col justify-center">
        <div className="flex gap-2">
          <h4 className={"mt-0.5"}>|</h4>

          <HeaderTopRowButton content={"Login"} className="" aria-label={"login button"} />
          <h4 className={"mt-0.5"}>|</h4>

          <HeaderTopRowButton content={"Sign Up"} className="" aria-label={"sign up button"}/>

          <input placeholder="SEARCH TOURNAMENTS" className="bg-[#005573] p-1 w-72"></input>
        </div>
      </div>
    </div>
    <div className="flex justify-end gap-4">
      <h3>Home</h3>
      <h3>Circuits</h3>
      <h3>Results</h3>
      <h3>Paradigms</h3>
      <h3>Help</h3>
      <h3>About</h3>
    </div>
  </header>
  );
}