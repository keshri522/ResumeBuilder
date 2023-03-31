import React from 'react';
import Sharemodal from '../Social/sharemodal';
const About = () => {
    return (
        <div>
            <div className="container my-4">
                <div>
                    <h3 className='text-dark center'><span>Resume<span >-</span></span>Builder</h3>
                </div>
                <div className='col-md-12'>
                     <img className='img mx-3  ' src="https://media.istockphoto.com/id/928188940/vector/hand-writing-curriculum-vitae-application-paper-sheet.jpg?s=612x612&w=0&k=20&c=O8qcjezLRo1fm-fLjsg_kF7yAO-AWInIPou1iSAay1A=" alt="icons" />
                    <p className=' my-4 center  ' style={{color:"#222f3e",fontWeight:"500"}}>
                        Resume@Builder is a free web application where you can build resume instantly.Create professional resume in minutes with some of the temmplates.You can also upload profile avatar to the resume.Once you have filled the rsume field,you get a preview and download option.Click on download to have it to your local hard drive.You can update your resume which you have created earlier and delete the too.
                        A resume builder is an online app or piece of software that provides users with interactive forms and templates for creating a resume quickly and easily.  Resume Maker offers tips and suggestions to help you build each resume section fast, even if it's your very first job application.
                        Your resume communicates your qualifications and your brand—who you are and what makes you different—to employers and recruiters. In a tough job market, you need a resume that helps you stand out in a sea of applicants. Ultimately, the purpose of a strategically targeted, polished resume is to get you an interview.

                        <p className='mt-2'><mark>Resumes tell the employer about your experiences, skills and work history. Use your resume to highlight items that indicate you are a good worker, are qualified for the position and bring desirable skills to the job. If you are a student and have little or no previous job experiences, enhance information about your school and community activities.</mark></p>

                    </p>
                </div>
              
             
            </div>
            <div className='col-md-4 end center'>
            <h5 className=' font-weight-bold '>Kindly Share to your Friends</h5>
            
            <Sharemodal></Sharemodal>
            
            </div>
       
        </div>
    );
};

export default About;