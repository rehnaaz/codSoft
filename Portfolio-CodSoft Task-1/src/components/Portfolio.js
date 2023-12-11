import React, {Component} from 'react';

export default class Portfolio extends Component{
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Check out some of my work</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf' alt="" >
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item) => {
                                return(
                                    <div className='columns portfolio-item'>
                                        <div className='portfolio-item-meta'>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}