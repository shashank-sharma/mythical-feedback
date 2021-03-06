import React, {Component} from 'react';
import Main from './components/main';
import Footer from './components/footer';
import ExcelData from './components/exceldata';
import ScriptBuilder from './components/ScriptBuilder';
import LoginComponent from './components/LoginComponent';
import Experiment from './components/Experiment';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import M from 'materialize-css'
import './App.css'
import SpinnerComponent from "./components/SpinnerComponent";

class App extends Component {
    state = {
        opacity: 1,
        loading: false
    };

    componentDidMount() {
        M.AutoInit();
        setTimeout(() => {
            this.setState({
                opacity: 0,
            })
        }, 1000);
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1100);
    }

    render() {
        return (
            <div>
                <div>
                    <SpinnerComponent isLoading={this.state.loading} opacity={this.state.opacity}/>
                </div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/about' component={Main}/>
                            <Route path='/excel' component={ExcelData}/>
                            <Route path='/script-builder' component={ScriptBuilder}/>
                            <Route path='/login' component={LoginComponent}/>
                            <Route path='/experiment' component={Experiment}/>
                        </Switch>
                        {/*<Footer />*/}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;