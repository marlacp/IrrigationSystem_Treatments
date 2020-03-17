import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import Home from './Home';
import treatmentsComponent from './treatments_component';
import NotFound from './NotFound';
import AboutUs from './aboutUs';
import CTChartTable from './treatments_chart_table';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/treatments' component={treatmentsComponent} />
        <Route exact path='/treatments/:id/:hour' component={CTChartTable} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
