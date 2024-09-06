import { Separator } from "@/components/ui/separator";
import ImageGallery from "../_components/portfolio";

const Portfolio = () => {
    return ( 
        <div>
            <div className="flex items-center justify-center font-semibold text-3xl">
            My Portfolio
            </div>
            <p className="italic flex text-center justify-center pt-2">
            Transforming Ideas into Secure, Beautiful, and Efficient Digital Solutions with Seamless Integration and Unmatched Performance.
            </p>
            <div className="pt-4">
                <ImageGallery />
            </div>
            <div>
                <h3 className="flex justify-center text-3xl font-semibold pb-4">
                    Message to My Clients
                </h3>
                <Separator className="bg-black"/>
                <div className="italic">
                    <h3 className="font-semibold pb-2">
                        Dear Client,
                    </h3>
                    <p className="italic text-start pb-2">
                    I am committed to enhancing your development processes with robust security, efficient operations, and exceptional web design. 
                    By automating security measures, implementing advanced protocols, and crafting visually appealing, user-friendly websites, 
                    I ensure your systems remain secure and effective. Let’s work together to achieve your business goals. 
                    Hire me to safeguard, streamline, and beautify your projects.
                    </p>
                    <h3 className="font-semibold">
                        Best Regards,
                        <br />
                        Brian Kamau.
                    </h3>
                    <Separator className="bg-black"/>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;