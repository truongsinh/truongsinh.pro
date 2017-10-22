import * as React from "react";
import { A } from "../a";

export class Footer extends React.PureComponent<{}, {}> {
  render() {
    return <footer id="underfooter">
      <div className="container">
            <div style={{float: "left", marginRight: "0.5em"}}>
              <A rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img alt="Creative Commons License" style={{ width: 88, height: 31 }} src={require("./by-nc-sa.svg")} />
              </A>
              <img alt="Creative Commons License" style={{ width: 88, height: 31 }} src={require("./Commercial-license-button.svg")} />
            </div>
            <div>
                {/* @todo xmlns https://wiki.creativecommons.org/wiki/CCPlus */}
                Unless otherwise specified, all content on this site is licensed under a <A rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</A>.
                Permissions beyond the scope of this license, including but not limited to commercial rights, may be granted by contacting licensee.
            </div>

        {/* <!-- /row of widgets --> */}
      </div>
    </footer>
  }
}
