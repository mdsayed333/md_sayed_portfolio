import React from 'react';

const ContactMe = () => {
    return (
        <div style={{background: '#FDF5FA'}} className="grid lg:grid-cols-2 gap-6 p-12">
            <div className='p-10 shadow'>
                <h2 className='text-4xl font-bold text-primary my-4 '>Contact Me</h2>
                <p className='text-gray-600'>You can give me opinion about my webpage and project.I will try my best 
                    to reply all of your message. I am looking for a job opportunity to utilize my skills. 
                    I would be grateful if you take a look at my projects and contact me if you think I am a good fit.</p>
            </div>
            <div className='p-10 shadow'>
                <form>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <input type="email" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Message</span>
                        </label>
                        <textarea type="textarea" placeholder="Type message" class="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <button className='myButton mx-10'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;