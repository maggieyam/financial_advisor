
import React from 'react';
import { Link } from 'react-router-dom';
import RiskScaleButton from './risk_scale_button';

class Preference extends React.Component {
     constructor(props){
        super(props);
    }   
    
    componentDidMount() {
        this.props.fetchPreferences();
    }

    render() {
        const { preferences } = this.props;
        if (!preferences) return null;

        return(
            <div className="form-body">
                 <h3>Please Select A Risk Level For Your Investment Portfolio</h3>
                 <div>
                     <div className="risk-scale-label">
                         <label id="low">Low</label>
                         <label id="high">High</label>
                 </div>
                 <ul>
                    {preferences.map(preference => {
                        return(
                            <RiskScaleButton level={preference.id} />
                        )
                    })}
                    <button className="continue-btn">Continue</button>
                 </ul>
             </div>           
         </div>
        )
    }

}
export default Preference;