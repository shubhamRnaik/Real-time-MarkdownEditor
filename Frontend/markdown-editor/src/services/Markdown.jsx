import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import "../styles/editor.css";

function Markdown() {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <Header />
      </div>
      <div className="editor-body">
        <Body />
      </div>
      <div className="editor-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Markdown;
