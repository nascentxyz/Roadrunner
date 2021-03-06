import { footer, logo } from "../styles/components";

const Footer = () => {
  return (
    <footer className={footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className={logo} />
      </a>
    </footer>
  );
};

export default Footer;
