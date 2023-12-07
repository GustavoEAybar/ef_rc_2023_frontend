import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import Contact from './components/contact/Contact';
import Aboutus from './components/About-Us/Aboutus';

function App() {
  return (
    <div>
      <Heading/>
      <Subheading/>
      <Aboutus/>
    </div>
  );
}

export default App;
