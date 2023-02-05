import HeaderCSS from "./Header.module.css";
export function Header() {
  return (
    <header className={HeaderCSS.header}>
      <img
        className={HeaderCSS.logo}
        src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-linkedin-in-logo.png"
        alt="logo"
      ></img>
    </header>
  );
}
