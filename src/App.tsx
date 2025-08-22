
import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";
import { ModeToggle } from "./components/theming/theme-toggle";
import { Separator } from "./components/ui/separator";
function App() {
  const [userName, setUserName] = useState('md-danishraza');

  return (
    <main className='mx-auto max-w-6xl px-8 py-8'>

<div className="flex justify-between items-center mb-4 ">
  <h1 className="text-2xl font-extrabold text-primary">Github Users</h1>
  <div>
    <ModeToggle />
  </div>
</div>
<Separator className="my-4 bg-primary"/>
      <section>
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />

      </section>
      
    </main>
  );
}

export default App
