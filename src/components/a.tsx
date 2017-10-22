import * as React from "react";
import { trackOutboundLink } from "../utils/gtag";

export class A extends React.PureComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>, {}> {
  render() {
    const { href } = this.props;
    // @todo use regex ^http(s)://
    const target = href.startsWith("http") ? "_blank" : "_self";
    return <a
      target={target}
      {... this.props}
      onClick={(e)=>{
        // @todo e.preventDefault(); is here, but document.location is inside trackOutboundLink is dirty code
        e.preventDefault();
        trackOutboundLink(href, target);
      }}
    >
      {this.props.children}
    </a>
      ;
  }
}
