const React = require('react');
const NavBar = require('./navbar/NavBar')
const Character = require('./pages/Character')

/* the main page for the index route of this app */
class MainPage extends React.Component {}

const MainPage = function () {
    return (
        <div>
            <NavBar/>
            Main Page
            <Character/>
        </div>
    );
}

module.exports = MainPage;