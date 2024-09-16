
import LivePreview from "./LivePreview";
import LiveEditor from "./LiveEditor";
import '../styles/markdown-style.css'

function Body() {
  return (
    <div className="editorBody-container">
      <LiveEditor />
      <LivePreview />      
    </div>
  );
}

export default Body;
