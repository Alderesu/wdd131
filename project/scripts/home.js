document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Passionate Web Developer Ready to Innovate</h2>
            <p>
                My passion for technology and computers has always driven my career path, leading me to pursue a Bachelor's degree in Software Development. With nearly two years of experience as a web developer at a local American company, I have honed my skills in creating and optimizing websites using Duda as a platform.
            </p> 
            <p>
                In my role, I focused on building custom websites that are fully optimized for mobile, tablet, and desktop viewing. I initiated Search Engine Optimization (SEO) strategies to enhance visibility on Google for targeted keywords and local markets. My responsibilities included implementing security measures, such as SSL certificates, to safeguard against spam and hacking, as well as enhancing the overall user experience (UX) to boost conversions.
            </p>     
            <p>
                I also provided unlimited editing support, allowing clients to make any necessary changes to their content, images, and layouts throughout the life of their sites. Additionally, I managed updates to Google My Business listings, ensuring accurate information and engaging visuals.
            </p>
            <p>    
                My experience has equipped me with a strong foundation in web development, a keen eye for detail, and a commitment to delivering high-quality digital solutions. I am excited to continue my journey in software development, leveraging my skills to create innovative and impactful technology solutions.
            </p>
        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Education</h2>
            <p>
                Currently pursuing a B.S. in Software Development at Brigham Young University - Idaho.
            </p>
            <p>
                My education
                has equipped me with proficiency in JavaScript, C#, GitHub, and MySQL, among other technologies
                essential for a career in software development. 
            </p>
        `;
        education.innerHTML = educationContent;
    }
});