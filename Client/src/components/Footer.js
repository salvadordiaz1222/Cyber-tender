import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="grey-text">Footer Content</h5>
                <p className="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="grey-text">Links</h5>
                <ul>
                  <li><a className="black-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="black-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="black-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="black-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="black-text container">
            © 2014 Copyright Text
            <a className="black-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        )
    }
}

export default Footer
