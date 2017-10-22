/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";


class Head extends React.PureComponent<{}, {}>{
  render() {
    let dangerousInnerHTML: string[] = this.props.children.map(value => {
      if (typeof value !== 'string')
        return renderToStaticMarkup(value);
      else
        return value;
    });

    return (
      <head dangerouslySetInnerHTML={{ __html: dangerousInnerHTML.join('') }}>
      </head>
    );
  }
}

interface HtmlProps {
  preBodyComponents: any;
  body: any;
  postBodyComponents: any;
  headComponents: any;
  htmlAttributes: any;
  bodyAttributes: any;
}

const css = (process.env.NODE_ENV === `production`) ?
<link rel="stylesheet" href={require("./assets/css/styles.css")} />
: null;

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = (props: HtmlProps) => {
  return (
    <html {...props.htmlAttributes}>
      <Head>
        {props.headComponents}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>TruongSinh Tran-Nguyen</title>

        <link rel="shortcut icon" href="assets/images/gt_favicon.png" />

        {/* <!-- Bootstrap --> */}
        <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet" />
        {/* <!-- Icons --> */}
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
        {/* <!-- Fonts --> */}
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Alice|Open+Sans:400,300,700" />
        {/* <!-- Custom styles --> */}
        {css}

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-43130231-1"></script>
        {`
        <!--[if lt IE 9]> <script src="assets/js/html5shiv.js"></script> <![endif]-->
        `}
      </Head>
      <body className="home" {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
