import { BrowserRouter, Route } from "react-router-dom";

import { FormStep1 } from './pages/formStep1'
import { FormStep2 } from './pages/formStep2'
import { FormStep3 } from './pages/formStep3'
import { FormStep4 } from './pages/formStep4'

export const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={FormStep1} />
            <Route path="/step2" component={FormStep2} />
            <Route path="/step3" component={FormStep3} />
            <Route path="/orcamento" component={FormStep4} />
        </BrowserRouter>
    );
}