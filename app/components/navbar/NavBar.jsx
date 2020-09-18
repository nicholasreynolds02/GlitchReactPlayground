const React = require('react');
const NavElement = require('./NavElement');

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavElement/>
            </div>
        )
    }
}

module.exports = NavBar;