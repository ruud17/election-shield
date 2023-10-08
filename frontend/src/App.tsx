import { FC } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
};

export default App;
