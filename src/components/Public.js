import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">A.D. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful State of Maharashtra, A.D. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          A.D. Repairs
          <br />
          A 16 Surya Complex
          <br />
          Solapur City, 413004
          <br />
          <a href="tel:+917385844828">(738) 584-4828</a>
        </address>
        <br />
        <p>Owner: Aniketh Deshpande</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
