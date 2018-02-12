import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Portfolio from '../../components/portfolio/portfolio';
import Front from '../../components/portfolio/front';

export default props => (
    <Router>
        <div>
            <Route path='/portfolio' component={Portfolio} />
            <Route exact path='/' component={Front} />
        </div>
    </Router>

)
