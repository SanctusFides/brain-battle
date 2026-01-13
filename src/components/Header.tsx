
export default function Header() { 
  return (
  <header className="flex justify-between items-baseline m-5">
    <h1 className="">Brain Battles</h1>
    <div>
      <div className="flex gap-4">
        <h4>|</h4>
        <h4>Login</h4>
        <h4>|</h4>
        <h4>Sign Up</h4>
        <input placeholder="SEARCH TOURNAMENTS" className="bg-[#005573] p-1 w-72"></input>
      </div>
      <div className="flex gap-4">
        <h3>Home</h3>
        <h3>Circuits</h3>
        <h3>Results</h3>
        <h3>Paradigms</h3>
        <h3>Help</h3>
        <h3>About</h3>
      </div>
    </div>
  </header>
  );
}