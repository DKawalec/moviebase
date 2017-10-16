import React, {PropTypes} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { FOOTER_TEXT } from '../config/settings';

// import Bootstrap first, then own styles on top of it
import 'bootstrap/dist/css/bootstrap.min.css';
import globals from '../style/global.scss';

class App extends React.Component {
  render() {
    return (
      <div className={globals.mainContainer}>
        <Header />
        {this.props.children}
        <Footer text={FOOTER_TEXT}/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
