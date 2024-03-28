const FourCard = () => {
  return (
    <>
      <header>
        <div className="wrapper wrapper--narrow">
          <h1>
            <span>Reliable, efficient delivery</span> <br /> Powered by
            Technology
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <section>
            <div className="layout-grid">
              <div className="col">
                <article>
                  <div className="card border-cyan">
                    <h2>Supervisor</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                    <img
                      src="/images/icon-supervisor.svg"
                      alt="Supervisor Icon"
                    />
                  </div>
                </article>
              </div>
              <div className="col">
                <article>
                  <div className="card border-red">
                    <h2>Team Builder</h2>
                    <p>
                      Scans our talent network to create the optimal team for
                      your project
                    </p>
                    <img
                      src="/images/icon-team-builder.svg"
                      alt="Team Bilder Icon"
                    />
                  </div>
                </article>
                <article>
                  <div className="card border-orange">
                    <h2>Karma</h2>
                    <p>Regularly evaluates our talent to ensure quality</p>
                    <img src="/images/icon-karma.svg" alt="Karma Icon" />
                  </div>
                </article>
              </div>
              <div className="col">
                <article>
                  <div className="card border-blue">
                    <h2>Calculator</h2>
                    <p>
                      Uses data from past projects to provide better delivery
                      estimates
                    </p>
                    <img
                      src="/images/icon-calculator.svg"
                      alt="Calculator Icon"
                    />
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
export default FourCard
