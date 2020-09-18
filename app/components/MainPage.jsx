const React = require('react');
const Character = require('./Character')

/* the main page for the index route of this app */
const MainPage = function() {
  return (
    <div>
      Hello
      <Character />
    </div>
  );
}

module.exports = MainPage;