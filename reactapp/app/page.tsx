import Nav from './components/Nav';
import Splash from './components/Splash';
import Edu from './components/Edu';
import Honors from './components/Honors';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import Projects from './components/Projects';

export interface Person {
  firstName: string;
  lastName: string;
};

const myName = {
  firstName: 'Dalton',
  lastName: 'Shepard',
};

export default function Home() {
  return (
    <div>
      <Nav person = {myName} />
      <section className='splash'>  
         <Splash />
      </section>
      <hr></hr>
      <Edu />
      <Honors />
      <Skills />
      <Leadership />
      <Projects />
      <Footer />
    </div>
  );
}
