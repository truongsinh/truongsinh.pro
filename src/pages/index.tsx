import * as React from "react";
import { A } from "../components/a";
import { Footer } from "../components/footer/footer";
import {
  List, Container, Icon, SemanticICONS,
  Grid,
  Segment,
  Image,
} from "semantic-ui-react";
interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const data = {
  avatarUrl: require("../assets/images/guy.jpg"),
  name: `TruongSinh "Sinh" Tran-Nguyen`,
  tagline: `Tech Visionary, Coach and Investor`,
  description: `
  I am enthusiastic in technology and leadership,
  and has been woking in ICT industry for several years,
  both at technology- and business-oriented,
  with and without decision-making positions.
  I believe in creativity, revolution and self-learning orginzation.
`,
  socnetList: [
    {
      socnetName: "twitter",
      href: "https://twitter.com/truongsinhtn/"
    },
    {
      socnetName: "linkedin",
      href: "https://www.linkedin.com/in/truongsinh/"
    },
    {
      socnetName: "github",
      href: "https://github.com/truongsinh/"
    },
  ],
  careerList: [
    {
      title: `Speaker & Blogger`,
      description: `I write and give speech on leadership and technology from my experiences.
      I believe I can only a be a successful leader if the organization I lead
      continue to grow and learn even when I left.`,
    },
    {
      title: `Smarp`,
      description: `As Head of Technology, I am responsible for
      the actions and results delivered by the entire product team
      including but not limited to product strategy, development, deployment, and stability
      since 2012.`,
    },
    {
      title: `Social Ark`,
      description: `A failed startup, but invaluable lessons, in terms of
      technology, entrepreneurship and fail-fast starup, 2011-2012.`,
    },
    {
      title: `Eventio`,
      description: `I found the anwser to an inpirational question,
      "what if you had only one more day to live", 2011`,
    },
  ],
  highlightArticleList: [
    {
      title: `HOW stop saying "I'm too busy" (and not just WHY)`,
      href: "https://www.linkedin.com/pulse/how-stop-saying-im-too-busy-just-why-truongsinh-tran-nguyen/",
      thumbnail: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAA3WAAAAJGM1MmUxNDExLWYzODItNGE0OC04ZTkwLTU4NjUwZjVkZTI4Ng.png",
      action: "Read & discuss on Linkedin →",
      tagList: [
        "leadership",
        "time management",
      ],
    },
    {
      title: `Solving problems without waiting for irrelavent info`,
      href: "https://www.linkedin.com/pulse/we-need-more-information-do-iterations-assumption-tran-nguyen/",
      thumbnail: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAooAAAAJGJmZmI3ZDUwLThlY2ItNDBiZS1hN2IyLTk3YzNlYjNlMTc4Zg.jpg",
      action: "Read & discuss on Linkedin →",
      tagList: [
        "leadership",
        "problem solving",
      ],
    },
    {
      title: `2 speeches given on inauguration day, 2 leadership styles`,
      href: "https://www.linkedin.com/pulse/2-contrast-speeches-given-inauguration-day-truongsinh-tran-nguyen/",
      thumbnail: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAxLAAAAJDE2MmEyYjc3LWM0NmQtNDc2NC05MzIyLTA4NGU0ZjllYTc4NQ.png",
      action: "Read & discuss on Linkedin →",
      tagList: [
        "leadership",
        "inspiration",
      ],
    },
    {
      title: `Stop saying, "it depends"; make your answers useful`,
      href: "https://www.linkedin.com/pulse/stop-saying-depends-make-your-answers-useful-truongsinh-tran-nguyen/",
      thumbnail: "https://media.licdn.com/media/AAEAAQAAAAAAAAOrAAAAJDcxY2RkNGFmLWYyYjAtNDdmYy1hY2U2LWRhMjBlYjAyNDYxOQ.jpg",
      action: "Read & discuss on Linkedin →",
      tagList: [
        "leadership",
        "problem solving",
      ],
    },
    {
      title: `Fighting spam email: stop IPs blacklist, start using SPF & DKIM`,
      href: "https://www.linkedin.com/pulse/fighting-spam-email-stop-blacklisting-ips-start-using-tran-nguyen/",
      thumbnail: "https://tech.smarp.com/static/ab293d622eb852df73db445502a6f93c-2584a.jpg",
      action: "Read & discuss on Linkedin →",
      tagList: [
        "technology",
        "email",
        "spam",
      ],
    },
    {
      title: `Continuous Integration (CI) for Golang with Gitlab 8.x`,
      href: "https://tech.smarp.com/truongsinh/continuous-integration-ci-for-golang-with-gitlab-8-x/",
      thumbnail: "https://tech.smarp.com/static/63e2b86e91f521712e6ba85cb217c44b-2584a.jpg",
      action: "Read on Smarp blog →",
      tagList: [
        "technology",
        "continuous integration",
      ],
    },
  ],
};
// @todo https://semantic-ui.com/collections/grid.html
// All grid systems chooses an arbitrary column count to allow per row. Semantic's default theme uses 16 columns.
// The default column count, and other arbitrary features of grids can be changed by adjusting Semantic UI's underlying theming variables.
export default (props: IndexPageProps) =>
  <div className="home">
    <header id="header">
      {/* <!-- Fonts --> */}
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Alice|Open+Sans:400,300,700" />
      {/* <!-- Semantic UI --> */}
      <link rel="stylesheet" href={require('semantic-ui-css/semantic.min.css')} />
      {/* <!-- Custom styles --> */}
      <link rel="stylesheet" href={require("../assets/css/styles.css")} />
      {/* <div id="head" className="parallax" parallax-speed="2"> */}
      <section id="head">
        <h1 id="logo" className="text-center">
          <Image src={data.avatarUrl} size='small' shape='circular' />
          <span className="title">{data.name}</span>
          <span className="tagline">{data.tagline}</span>
          <List horizontal className="tagline">
            {data.socnetList.map((e) => (
              // @todo not really semantic here, should use `as` and `icon` props
              <List.Item>
                <A href={e.href} ><Icon name={e.socnetName as SemanticICONS} size="large" /></A>
              </List.Item>
            ))}
          </List>
        </h1>
      </section>
      {/* </div> */}

    </header>

    <main id="main">

      <Container>
        <Segment as="section" basic textAlign="center">
          <p className="lead" style={{ color: "#999" }}>{data.description}</p>
        </Segment>

        <Grid as="section" stackable doubling columns={4} className="featured">
          <Grid.Row>
            <h2 className="section-title"><span>My Career</span></h2>
          </Grid.Row>
          {data.careerList.map((e) => (
            <Grid.Column>
              <h3 className="text-center">{e.title}</h3>
              <p>{e.description}</p>
              {/* <!--
            <p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
             --> */}
            </Grid.Column>
          ))}
        </Grid>

        <Grid as="section" columns={3} doubling stackable className="recentworks">
          <Grid.Row columns={1}>
            <h2 className="section-title"><span>Highlight Articles</span></h2>
          </Grid.Row>

          {data.highlightArticleList.map((e) => (
            <Grid.Column >
              <A className="thumbnail" href={e.href}>
                <span className="img">
                  <img src={e.thumbnail} alt="" />
                  <span className="cover"><span className="more">{e.action}</span></span>
                </span>
                <span className="title">{e.title}</span>
              </A>
              {/* // @todo the use of `Container` create bigger margin than original work  */}
              <Container textAlign="center">
                <List celled horizontal>
                  {e.tagList.map((tag) => (
                    // @todo in original work class ".details" is used, not `fontSize: ".75rem"`
                    <List.Item
                      style={{ fontSize: ".75rem" }}
                    ><a href="">{tag}</a></List.Item>
                  ))}
                </List>
              </Container>
            </Grid.Column>
          ))}
        </Grid>

      </Container>

    </main>

    <Footer />
  </div>
  ;
