import NavBar from "./components/navbar";
import Landing from "./components/landing";
import Blogpost from "./components/blogpost";

export default function Home() {
  return (
    <div className="bg-orange-50">
      <NavBar />
      <Landing />
      <Blogpost />
    </div>
  );
}
