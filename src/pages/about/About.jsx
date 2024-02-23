import { AboutContainer, InfoContainer, StyledImage } from "./About.style";

import codingSvg from "../../assets/coding.svg";

const About = () => {
    return (
        <AboutContainer wrap="wrap">
            <StyledImage src={codingSvg} />
            <div>
                <h1>
                    About Software Developer <span>Hüseyin Kaplan</span>
                </h1>
            </div>
            <InfoContainer>
                <h2>Hi, I'am Hüseyin</h2>
                <h3>
                    I’m currently learning Full-Stack Development Languages.
                </h3>
                <h4>
                    I've already known JS, ReactJS, NodeJS, MongoDB,SQL, Python,
                    Docker...
                </h4>
                {/* for gmail */}
                <h2>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kplnhsyn.49@gmail.com"
                        target="_blank"
                    >
                        Send email
                    </a>
                    : kplnhsyn.49@gmail.com
                </h2>
                {/* for outlock */}
                {/* <h2>
                    <a href="mailto:josh.smith@clarusway.com">Send email</a> :
                    hsynkpln.49@gmail.com
                </h2> */}
            </InfoContainer>
        </AboutContainer>
    );
};

export default About;
