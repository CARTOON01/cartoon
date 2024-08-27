import { Button } from "@/components/ui/button";
import Certificate from "./certificate";

const About = () => {
    return ( 
        <div>
        <div className="flex justify-center font-semibold text-3xl">
            About Me
        </div>
        <div>
            <p className="text-start text-lg">
            As a DevSecOps engineer, I specialize in integrating robust security practices into the DevOps pipeline. 
            With a diverse technical skillset encompassing NextJS, GitHub, MongoDB, MySQL, TailwindCSS, Python, Flask, 
            JavaScript, NodeJS, and HTML, I excel at automating security measures, implementing advanced protocols, 
            and seamlessly integrating third-party services to enhance functionality and streamline workflows. 
            My expertise in web design ensures that I create not only secure but also visually appealing and user-friendly interfaces. 
            My comprehensive approach ensures the creation of secure, efficient, and scalable infrastructures that support agile 
            and effective software delivery. Committed to protecting organizations from cyber threats, I leverage my skills in both security 
            and web design to enhance system integrity while meeting modern development demands.
            </p>
        </div>
        <div className="pt-3">
            <h3 className="flex justify-center font-semibold text-3xl">
                My Certifications
            </h3>
            <Certificate />
            <div className="flex items-center justify-center">
            <Button variant="custom" className="text-sm font-semibold hover:text-black">Visit My LinkedIn</Button>
            </div>
        </div>
        </div>
     );
}
 
export default About;