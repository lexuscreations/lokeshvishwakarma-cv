import "./app.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header.jsx";
import ResumeArea from "./components/ResumeArea/ResumeArea.jsx";
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Provider store={store}>
        <main className="container">
          <ResumeArea />
        </main>
      </Provider>
      <ScrollToTop />
    </div>
  );
};

export default App;
