import * as React from "react";

export class Footer extends React.PureComponent<{}, {}> {
  render() {
    return <footer id="underfooter">
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-sm-2 widget">
            <div className="widget-body">
              <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img alt="Creative Commons License" style={{ width: 88, height: 31 }} src={require("./by-nc-sa.svg")} />
              </a>
              <img alt="Creative Commons License" style={{ width: 88, height: 31 }} src={require("./Commercial-license-button.svg")} />
            </div>
          </div>

          <div className="col-md-9 col-sm-10 widget">
            <div className="widget-body">
                {/* @todo xmlns https://wiki.creativecommons.org/wiki/CCPlus */}
                Unless otherwise specified, all content on this site is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
          Permissions beyond the scope of this license, including but not limited to commercial rights, may be granted by contacting licensee.
          
            </div>
          </div>
        </div>
        {/* <!-- /row of widgets --> */}
      </div>
    </footer>
  }
}
