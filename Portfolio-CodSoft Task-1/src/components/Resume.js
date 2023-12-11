import React, {Component} from "react";

export default class Resume extends Component{
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id="resume">
                <div className="row education ">
                    <div className="three columns header-col">
                        <h1 ><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.education &&  resumeData.education.map((item) => {
                                return(
                                    <div className="row item">
                                        <div className="twelve column">
                                            <h5> {item.degree} </h5>
                                            <p>
                                                <span>&bull; {item.College} </span> <br/>
                                                <span>&bull; {item.Specialization} </span> <br/>
                                                <span>&bull;</span> <em className="date"> {item.MonthOfPassing} {item.YearOfPassing} </em> <br/>
                                                <span> {item.Achievements} </span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row skill">
                    <div className="three column header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            {resumeData.skillsDescription}
                        </p>
                        <div className="bars">
                            <ul className="skills">
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return (
                                            <li>
                                                <span className= {'bar-expand $ {item.skillname.toLowercase()}'} ></span>
                                                <em>{item.skillname}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}