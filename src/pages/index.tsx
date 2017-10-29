import * as React from "react";
import { A } from "../components/a";
import { Footer } from "../components/footer/footer";
import Img from 'gatsby-image';
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
  data: any;
}

// @todo https://semantic-ui.com/collections/grid.html
// All grid systems chooses an arbitrary column count to allow per row. Semantic's default theme uses 16 columns.
// The default column count, and other arbitrary features of grids can be changed by adjusting Semantic UI's underlying theming variables.
export default (props: IndexPageProps) => {
  const data = props.data.allDataJson.edges[0].node;
  const highlightArticleList = props.data.allHighlightArticleListJson.edges.map(e => e.node);
  // data.avatarUrl = props.data.file.childImageSharp.resolutions;
  return <div className="home">
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
          <Img
            resolutions={data.avatar.childImageSharp.resolutions}
            className="ui circular image"
            style={{
              border: "9px solid rgba(0, 0, 0, 0.05)"
            }}
          />
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

          {highlightArticleList.map((e) => (
            <Grid.Column >
              <A className="thumbnail" href={e.href}>
                <span className="img">
                  <span className="cover"><span className="more">{e.action}</span></span>
                  <Img resolutions={e.thumbnail.childImageSharp.resolutions}/>
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
}

// @todo vscode graphql plugin
export const query = graphql`
query GatsbyImageSampleQuery {
  allDataJson {
    edges {
      node {
        avatar {
          childImageSharp {
            resolutions(width: 140, height: 140) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
        name
        tagline
        description
        socnetList {
          socnetName
          href
        }
        careerList {
          title
          description
        }
      }
    }
  }
  allHighlightArticleListJson {
    edges {
      node {
        title
        href
        thumbnail {
          childImageSharp {
            resolutions(width: 290, height: 180, quality: 100) {
              ...GatsbyImageSharpResolutions_withWebp
            }
          }
        }
        action
        tagList
      }
    }
  }
}

`
