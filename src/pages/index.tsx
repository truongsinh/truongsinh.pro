import * as React from "react";
require("../assets/css/styles.css");
interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
    <div className="home">
      <header id="header">
        <div id="head" className="parallax" parallax-speed="2">
          <h1 id="logo" className="text-center">
            <img className="img-circle" src={require("../assets/images/guy.jpg")} alt="" />
            <span className="title">TruongSinh "Sinh" Tran-Nguyen</span>
            <span className="tagline">Tech Visionary, Coach and Investor</span>
            <p className="tagline">
              <a target="_blank"
                href="https://twitter.com/truongsinhtn/"

              >
                <i className="fa fa-twitter fa-2"></i>
              </a>
              &nbsp;
              <a target="_blank"
                href="https://www.linkedin.com/in/truongsinh/"

              >
                <i className="fa fa-linkedin fa-2"></i>
              </a>
              &nbsp;
              <a target="_blank"
                href="https://github.com/truongsinh/"

              >
                <i className="fa fa-github fa-2"></i>
              </a>
            </p>
          </h1>
        </div>

      </header>

      <main id="main">

        <div className="container">

          <div className="row section topspace">
            <div className="col-md-12">
              <p className="lead text-center text-muted">
                I am enthusiastic in technology and leadership,
              and has been woking in ICT industry for several years,
              both at technology- and business-oriented,
              with and without decision-making positions.
              I believe in creativity, revolution and self-learning orginzation.
          </p>
            </div>
          </div>
          {/* <!-- / section --> */}

          <div className="row section featured topspace">
            <h2 className="section-title"><span>My Career</span></h2>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <h3 className="text-center">Speaker &amp; Blogger</h3>
                <p>
                  I write and give speech on leadership and technology from my experiences.
              I believe I can only a be a successful leader if the organization I lead
              continue to grow and learn even when I left.
            </p>
              </div>
              <div className="col-sm-6 col-md-3">
                <h3 className="text-center">Smarp</h3>
                <p>
                  As Head of Technology, I am responsible for
              the actions and results delivered by the entire product team
              including but not limited to product strategy, development, deployment, and stability
              since 2012.
            </p>
                {/* <!--
            <p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
             --> */}
              </div>
              <div className="col-sm-6 col-md-3">
                <h3 className="text-center">Social Ark</h3>
                <p>
                  A failed startup, but invaluable lessons, in terms of
              technology, entrepreneurship and fail-fast starup, 2011-2012.
            </p>

              </div>
              <div className="col-sm-6 col-md-3">
                <h3 className="text-center">Eventio</h3>
                <p>
                  I found the anwser to an inpirational question,
              "what if you had only one more day to live", 2011
            </p>
              </div>
            </div>
          </div>
          {/* <!-- / section --> */}

          <div className="row section recentworks topspace">

            <h2 className="section-title"><span>Highlight Articles</span></h2>

            <div className="thumbnails recentworks row">

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" className="thumbnail"
                  href="https://www.linkedin.com/pulse/how-stop-saying-im-too-busy-just-why-truongsinh-tran-nguyen/"

                >
                  <span className="img">
                    <img src="https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAA3WAAAAJGM1MmUxNDExLWYzODItNGE0OC04ZTkwLTU4NjUwZjVkZTI4Ng.png" alt="" />
                    <span className="cover"><span className="more">Read &amp; discuss on Linkedin &rarr;</span></span>
                  </span>
                  <span className="title">HOW stop saying "I'm too busy" (and not just WHY)</span>
                </a>
                <span className="details"><a href="">leadership</a> | <a href="">time management</a></span>
                <h4></h4>
                <p></p>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" className="thumbnail"
                  href="https://www.linkedin.com/pulse/we-need-more-information-do-iterations-assumption-tran-nguyen/"

                >
                  <span className="img">
                    <img src="https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAooAAAAJGJmZmI3ZDUwLThlY2ItNDBiZS1hN2IyLTk3YzNlYjNlMTc4Zg.jpg" alt="" />
                    <span className="cover"><span className="more">Read &amp; discuss on Linkedin &rarr;</span></span>
                  </span>
                  <span className="title">Solving problems without waiting for irrelavent info</span>
                </a>
                <span className="details"><a href="">leadership</a> | <a href="">problem solving</a></span>
                <h4></h4>
                <p></p>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" className="thumbnail"
                  href="https://www.linkedin.com/pulse/2-contrast-speeches-given-inauguration-day-truongsinh-tran-nguyen/"

                >
                  <span className="img">
                    <img src="https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAxLAAAAJDE2MmEyYjc3LWM0NmQtNDc2NC05MzIyLTA4NGU0ZjllYTc4NQ.png" alt="" />
                    <span className="cover"><span className="more">Read &amp; discuss on Linkedin &rarr;</span></span>
                  </span>
                  <span className="title">2 speeches given on inauguration day, 2 leadership styles</span>
                </a>
                <span className="details"><a href="">leadership</a> | <a href="">inspiration</a></span>
                <h4></h4>
                <p></p>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" className="thumbnail"
                  href="https://www.linkedin.com/pulse/stop-saying-depends-make-your-answers-useful-truongsinh-tran-nguyen/"

                >
                  <span className="img">
                    <img src="https://media.licdn.com/media/AAEAAQAAAAAAAAOrAAAAJDcxY2RkNGFmLWYyYjAtNDdmYy1hY2U2LWRhMjBlYjAyNDYxOQ.jpg" alt="" />
                    <span className="cover"><span className="more">Read &amp; discuss on Linkedin &rarr;</span></span>
                  </span>
                  <span className="title">Stop saying, "it depends"; make your answers useful</span>
                </a>
                <span className="details"><a href="">leadership</a> | <a href="">problem solving</a></span>
                <h4></h4>
                <p></p>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" className="thumbnail"
                  href="https://www.linkedin.com/pulse/fighting-spam-email-stop-blacklisting-ips-start-using-tran-nguyen/"

                >
                  <span className="img">
                    <img src="https://tech.smarp.com/static/ab293d622eb852df73db445502a6f93c-2584a.jpg" alt="" />
                    <span className="cover"><span className="more">Read &amp; discuss on Linkedin &rarr;</span></span>
                  </span>
                  <span className="title">Fighting spam email: stop IPs blacklist, start using SPF &amp; DKIM</span>
                </a>
                <span className="details"><a href="">technology</a> | <a href="">email</a> | <a href="">spam</a></span>
                <h4></h4>
                <p></p>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" className="thumbnail"
                  href="https://tech.smarp.com/truongsinh/continuous-integration-ci-for-golang-with-gitlab-8-x/"

                >
                  <span className="img">
                    <img src="https://tech.smarp.com/static/63e2b86e91f521712e6ba85cb217c44b-2584a.jpg" alt="" />
                    <span className="cover"><span className="more">Read on Smarp blog &rarr;</span></span>
                  </span>
                  <span className="title">Continuous Integration (CI) for Golang with Gitlab 8.x</span>
                </a>
                <span className="details"><a href="">technology</a> | <a href="">continuous integration</a></span>
                <h4></h4>
                <p></p>
              </div>
            </div>

          </div>
          {/* <!-- /section --> */}

        </div>
        {/* <!-- /container --> */}

      </main>

      {/* <!-- JavaScript libs are placed at the end of the document so the pages load faster --> */}
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
      <script src={require("file!../assets/js/template.js")}></script>
    </div>
  ;
