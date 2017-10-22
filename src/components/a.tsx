import * as React from "react";
import { trackOutboundLink } from "../utils/gtag";

export class A extends React.PureComponent<{
  href: string;
  className?: string;
}, {}> {
  render() {
    const { href } = this.props;
    // @todo use regex ^http(s)://
    const target = href.startsWith("http") ? "_blank" : "_self";
    return <a
      href={href}
      target={target}
      className={this.props.className}
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
