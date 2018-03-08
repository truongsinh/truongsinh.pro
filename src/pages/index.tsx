import * as React from "react";
import { A } from "../components/a";
import { Footer } from "../components/footer/footer";
import Img from 'gatsby-image';
import {
  Flex,
  Box,
  Container,
} from "rebass";
// import {
//    Twitter,
//    Github,
//    Linkedin,
//    } from "grommet-icons";
// import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
// import { SemanticICONS } from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
  data: any;
}

function socnetIcon(socnetName: string): JSX.Element {
  // if (socnetName == "Twitter") return (
  //   <Twitter color="plain" />
  // );
  // if (socnetName == "GitHub") return (
  //   <Github color="plain" />
  // );
  // if (socnetName == "LinkedIn") return (
  //   <Linkedin color="plain" />
  // );
  // Linkedin
  return <div></div>
  // if (socnetName == "Crunchbase") return (
  //   <div>
  //     <Icon.Group size='large'>
  //       <Icon size='large' style={{
  //         // fontSize: "1.2em",
  //       }} name='square' />
  //       <Icon size='small' style={{
  //         fontWeight: "bold",
  //         color: "white",
  //         fontFamily: "arial",
  //         marginLeft: "-2px",
  //       }}>cb</Icon>
  //     </Icon.Group>
  //   </div>
  // );
  // if (socnetName == "Goodreads") return (
  //   <div>
  //     <Icon.Group size='large'>
  //       <Icon size='large' style={{
  //         // fontSize: "1.2em",
  //       }} name='square' />
  //       <Icon size='large' style={{
  //         fontFamily: "arial",
  //         fontSize: "1.2em",
  //         color: "white",
  //         marginLeft: "-2px",
  //         marginTop: "-5px",
  //       }}>g</Icon>
  //     </Icon.Group>
  //   </div>
  // );

  // const iconName = `${socnetName.toLowerCase()}` as SemanticICONS;
  // return (
  //   <Icon.Group size='large'>
  //     <Icon name={iconName} size="large" />
  //   </Icon.Group>
  // );

}

// @todo https://semantic-ui.com/collections/grid.html
// All grid systems chooses an arbitrary column count to allow per row. Semantic's default theme uses 16 columns.
// The default column count, and other arbitrary features of grids can be changed by adjusting Semantic UI's underlying theming variables.
export default (props: IndexPageProps) => {
  const data = props.data.allDataJson.edges[0].node;
  const highlightArticleList = props.data.allHighlightArticleListJson.edges.map(e => e.node);
  const certificateList = props.data.allCertificateListJson.edges.map(e => e.node);
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
          <ul horizontal className="tagline">
            {data.socnetList.map((e) => (
              // @todo not really semantic here, should use `as` and `icon` props
              <li>
                <A href={e.href} >{socnetIcon(e.socnetName)}</A>
              </li>
            ))}
          </ul>
        </h1>
      </section>
      {/* </div> */}

    </header>

    <main id="main">

      <Container>
        <section style={{
          textAlign: "center",
        }} >
          <p className="lead" style={{ color: "#999" }}>{data.description}</p>
        </section>
        <section>
          <h2 className="section-title"><span>My Career</span></h2>
          <Flex flexWrap='wrap' className="featured">
            {data.careerList.map((e) => (
              <Box width={[1, 1 / 2, 1 / 4]} p="1rem">
                <h3 className="text-center">{e.title}</h3>
                <p>{e.description}</p>
                {/* <!--
            <p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
             --> */}
              </Box>
            ))}
          </Flex>
        </section>

        <section>
          <h2 className="section-title"><span>Highlight Articles</span></h2>
          <Flex flexWrap='wrap' className="recentworks">

            {highlightArticleList.map((e) => (
              <Box width={[1, 1 / 2, 1 / 3]} p="1rem">
                <A className="thumbnail" href={e.href}>
                  <span className="img">
                    <span className="cover"><span className="more">{e.action}</span></span>
                    <Img resolutions={e.thumbnail.childImageSharp.resolutions} />
                  </span>
                  <span className="title">{e.title}</span>
                </A>
                {/* // @todo the use of `Container` create bigger margin than original work  */}
                <Container textAlign="center">
                  <ul celled horizontal>
                    {e.tagList.map((tag) => (
                      // @todo in original work class ".details" is used, not `fontSize: ".75rem"`
                      <li
                        style={{ fontSize: ".75rem" }}
                      ><a href="">{tag}</a></li>
                    ))}
                  </ul>
                </Container>
              </Box>
            ))}
          </Flex>
        </section>

        <section>
          <h2 className="section-title"><span>Certificates</span></h2>
          <Flex flexWrap='wrap' className="recentworks">

            {certificateList.map((e) => (
              <Box width={[1, 1 / 2, 1 / 3]} p="1rem" >
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
              </Box>
            ))}
          </Flex>
        </section>

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
