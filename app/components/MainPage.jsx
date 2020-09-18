const React = require('react');
const Character = require('./pages/Character')

/* the main page for the index route of this app */
const MainPage = function() {
  return (
    <div>
      Hello There
      <Character />
    </div>
  );
}

module.exports = MainPage;