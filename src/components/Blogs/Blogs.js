import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h4 className='text-primary'>1. authorization and authentication defference</h4>
            <p>Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.

            Authentication is the act of validating that users are whom they claim to be. 

            Passwords. Usernames and passwords are the most common authentication factors. If a user enters the correct data, the system assumes the identity is valid and grants access..

            Authorization in system security is the process of giving the user permission to access a specific resource or function. 
            </p>
            <h4 className='text-primary'>2. What other options do you have to implement authentication</h4>
            <p > Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple,

            Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself,. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.
            </p>
        </div>
    );
};

export default Blogs;