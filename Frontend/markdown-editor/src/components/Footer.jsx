import '../styles/footer.css';
import linkedIn from '../assets/linkedIn.png'
import github from '../assets/github.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/shubham-r-naik-abb166111" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn" className="footer-logo" />
          </a>
          <a href="https://github.com/shubhamRnaik/Real-time-MarkdownEditor" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="footer-logo" />
          </a>
        </div>
        <div className="footer-text">
          Created By <strong>SHUBAM R NAIK</strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
