import React from 'react';
import CompanyProjects from './components/CompanyProjects/companyProjects'
import Navbar from './components/Navbar/navbar'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import ProjectDescription from './components/ProjectDescription/projectDescription'
import CompanyProject from './components/CompanyProjects/companyProjects'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={CompanyProject}></Route>
          <Route exact path="/project/:id" component={ProjectDescription}></Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
