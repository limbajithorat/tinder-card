import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import PostCard from "./components/PostCard";
function App() {
  return (
    <div>
      <div className="app">
        <Header />

        <TinderCards />
        <PostCard />
      </div>
    </div>
  );
}

export default App;
