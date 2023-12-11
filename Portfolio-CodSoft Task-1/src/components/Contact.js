import React, {Component} from 'react';

export default class Contact extends Component{
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id='contact'>
                <div className='row section-head'>
                    <div className='ten column'>
                        <p className='lead'>
                            Feel free to contact me.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <aside className='eight column footer-widget'>
                        <div className='widget'>
                            <h4> <span className='fa fa-envelope'> E-mail ID - {resumeData.Email} </span> </h4>
                            <h4><span className='fa fa-phone-square'> Contact Number - {resumeData.Contact} </span></h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}