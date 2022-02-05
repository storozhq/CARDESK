import React from 'react';

const About = () => {

    const [json, setJson] = React.useState({text: ''});

    React.useEffect(() => {
        fetch('https://demo-api.vsdev.space/api/brom/about_page')
            .then(res => res.json())
            .then(data => setJson(data))

    }, []);

    return (
        <div>
            <div className='w-500px h-500px mx-16'>{json.text}
            </div>
        </div>
    );
};

export default About;