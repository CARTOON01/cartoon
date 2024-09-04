import { MailPlusIcon, PhoneCallIcon } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiInstagram } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const Contact = () => {
    return ( 
        <div>
            <div className="flex justify-center text-3xl font-semibold">
            Contact Me
            </div>
            <div>
                <h3 className="flex justify-center pb-4">Follow Me On Social Media :)</h3>
                <div className="flex justify-center gap-2">
                    <a href="https://www.linkedin.com/in/brianngugi">
                        <CiLinkedin size="35" color="#0077B5" />
                    </a>
                    <a href="https://instagram.com/itsngugi_1">
                        <TfiInstagram size="30" color="#E4405F" />
                    </a>
                    <a href="https://x.com/ItNgugi">
                        <FaSquareXTwitter size="30" color="#000000" />
                    </a>
                    <a href="https://github.com/CARTOON01">
                        <VscGithub size="30" color="#000000" />
                    </a>
                </div>
            </div>
            <div className="pt-3">
                <h3 className="flex justify-center font-semibold pb-4">You can also reach me via: </h3>
                <div className="flex justify-center gap-4">
                <div className="flex gap-2">
                    <MailPlusIcon size="30" color="#000000" />
                    info@briankamau.com
                </div>
                <div className="flex gap-2">
                    <PhoneCallIcon size="30" color="#000000" />
                    +254 708 761 578
                </div>
                </div>
            </div>
            <div className="flex justify-center items-center pt-4">
                <Accordion>
                    <AccordionItem pb={20}>
                        <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                            What's the cost of creating a website?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            It depends on the type of Website you want. A simple static website can cost as low as $300 while a complex website can cost as high as $10,000.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem pb={20}>
                        <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                How long does it take to create a website?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Depending on the Project or Website type it will take around 2 weeks to Months of Smart Work.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem pb={20}>
                        <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Do you offer Maintance Services on Websites?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Yes, I offer Maintance Services on Websites. I can help you keep your website up to date and secure.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
     );
}
 
export default Contact;