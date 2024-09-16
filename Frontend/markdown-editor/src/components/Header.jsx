import logo from '../assets/Markdown_Editor_Logo.png'

function Header() {
  return (
    <div>
        <section className='editor-logo-section'>
           <img src={logo} alt="logo" className="editor-logo"  /> <span style={{fontWeight:200 }}> Real Time Editor</span>
        </section>
        <section></section>
    </div>
  )
}

export default Header