import "./main.css";

function Main() {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">all projects</button>
        <button>HTML & Css</button>
        <button>javascript</button>
        <button>react & mui</button>
        <button>node & express</button>
      </section>
      <section className="right-section flex">
        {
          ["aa", "dd", "ss",1,1].map(item => {
            return(
        <article key={item} className="card">
          <img src="./landing-page.jpg" alt="" />
          <div className="box">
            <h2>landing page</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus, quo illo. Aspernatur exercitationem laborum eos,
            </p>
            <div className="flex icons">
              <div className="flex">
                <div className="icon-link"></div>
                <div className="icon-github"></div>
              </div>
              <a className="flex" href="#">
                more
                <span className="icon-arrow_forward"></span>
              </a>
            </div>
          </div>
        </article>

            )
          })
        }
      </section>
    </main>
  );
}

export default Main;
