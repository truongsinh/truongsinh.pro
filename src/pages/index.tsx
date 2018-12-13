import * as React from "react";
import { A } from "../components/a";
import { Footer } from "../components/footer/footer";
import Img from 'gatsby-image';
// import {
//   SemanticICONS,
// } from "semantic-ui-react/dist/commonjs";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import List from "semantic-ui-react/dist/commonjs/elements/List";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";
import { SemanticICONS } from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
  data: any;
}

function socnetIcon(socnetName: string): JSX.Element {
  if (socnetName == "Crunchbase") return (
    <div>
      <Icon.Group size='large'>
        <Icon size='large' style={{
          // fontSize: "1.2em",
        }} name='square' />
        <Icon size='small' style={{
          fontWeight: "bold",
          color: "white",
          fontFamily: "arial",
          marginLeft: "-2px",
        }}>cb</Icon>
      </Icon.Group>
    </div>
  );
  if (socnetName == "Goodreads") return (
    <div>
      <Icon.Group size='large'>
        <Icon size='large' style={{
          // fontSize: "1.2em",
        }} name='square' />
        <Icon size='large' style={{
          fontFamily: "arial",
          fontSize: "1.2em",
          color: "white",
          marginLeft: "-2px",
          marginTop: "-5px",
        }}>g</Icon>
      </Icon.Group>
    </div>
  );

  const iconName = `${socnetName.toLowerCase()}` as SemanticICONS;
  return (
    <Icon.Group size='large'>
      <Icon name={iconName} size="large" />
      </Icon.Group>
      );

}

// @todo https://semantic-ui.com/collections/grid.html
// All grid systems chooses an arbitrary column count to allow per row. Semantic's default theme uses 16 columns.
// The default column count, and other arbitrary features of grids can be changed by adjusting Semantic UI's underlying theming variables.
export default (props: IndexPageProps) => {

  /* <!-- Semantic UI --> */
  require('semantic-ui-css/semantic.min.css');
  /* <!-- Custom styles --> */
  require("../assets/css/styles.css");

  const data = props.data.allDataJson.edges[0].node;
  const highlightArticleList = props.data.allHighlightArticleListJson.edges.map(e => e.node);
  const certificateList = props.data.allCertificateListJson.edges.map(e => e.node);
  // data.avatarUrl = props.data.file.childImageSharp.resolutions;
  return <div className="home">
    <header id="header">
      {/* <!-- Fonts --> */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alice|Open+Sans:400,300,700" />
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
                <Popup
                  trigger={<A href={e.href} >{socnetIcon(e.socnetName)}</A>}
                  position="bottom center"
                  content={e.socnetName}
                  on={['hover', 'click']}
                />
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
                  <Img resolutions={e.thumbnail.childImageSharp.resolutions} />
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

        <Grid as="section" columns={3} doubling stackable className="recentworks">
          <Grid.Row columns={1}>
            <h2 className="section-title"><span>Certificates</span></h2>
          </Grid.Row>

          {certificateList.map((e) => (
            <Grid.Column >
              <A className="thumbnail" href={e.href}>
                <span className="img">
                  <span className="cover"><span className="more">Detail</span></span>
                  {
                    e.badge.childImageSharp ?
                      <Img resolutions={e.badge.childImageSharp.resolutions} /> :
                      <span>
                        <span style={{
                          display: "inline-block",
                          height: "100%",
                          verticalAlign: "middle",
                        }}></span>
                        {
                          // e.badge.relativePath
                          // codility-omega-2013.svg
                          // ../../data/home/svg/codility-omega-2013.svg
                          // "../../data/home/svg/" + e.badge.base
                          // @todo webpack will package ALL files
                        }
                        <img style={{ width: 145, height: 90, position: "relative", verticalAlign: "middle", }} src={require("../../data/home/svg/" + e.badge.base)} />
                      </span>
                  }

                </span>
                {e.title.map((title: string) => <div>{title}</div>)}
              </A>
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
  allCertificateListJson {
    edges {
      node {
        title
        href
        badge {
          base
          childImageSharp {
            resolutions(width: 290, height: 180, quality: 100) {
              ...GatsbyImageSharpResolutions_withWebp
            }
          }
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
