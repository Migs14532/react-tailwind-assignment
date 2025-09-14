import Header from "./components/Header";
import MainContent from "./components/ProfileContent";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
