import React, {PropTypes} from 'react';
// import Bootstrap first, then own styles on top of it
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/global.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;