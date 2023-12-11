import React, {Component} from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id='about'>
                <div className='row'>
                    <div className='three column'>
                        <img className='profilePic' src='images/profilepic.jpg' alt='' />
                    </div>
                    <div className='nine column main-col'>
                        <h2> About Me </h2>
                        <p> {resumeData.aboutme} </p>
                        <div className='row'>
                            <div className='columns contact-details'>
                                <h2>Contact Details</h2>
                                <p className='address'>
                                    <span className='fa fa-user'> {resumeData.name}</span> <br/>
                                    <span className='fa fa-phone-square'> {resumeData.Contact}</span> <br/>
                                    <span className='fa fa-envelope'> {resumeData.Email}</span> <br/>
                                    <span className='fa fa-map-marker'> {resumeData.address}</span> <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}