import { Badge } from "@/components/ui/badge";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, MailPlusIcon, PhoneCallIcon } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiInstagram } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";

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
                <div className="flex justify-center">
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
            <div>
            <div className="flex justify-center pt-4">
                <Badge>
                    FAQS
                </Badge>
            </div>
            <div className="items-center justify-center pt-3">
                <Disclosure>
                    <DisclosureButton className="py-2">
                        What is the best way to reach you?
                        <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="text-gray-500">
                        The best way to reach me is via email at info@briankamau.com
                    </DisclosurePanel>
                </Disclosure>
            </div>
            </div>
        </div>
     );
}
 
export default Contact;