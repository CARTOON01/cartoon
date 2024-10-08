import { Footer } from "../footer";
import { Header } from "../_header/header";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="flex flex-col min-h-screen dark:bg-[#1F1F1F]">
            <Header />
                    <main className="flex-grow pt-20 px-4 sm:px-6 md:px-8">
                        {children}
                    </main>
                <Footer />
        </div>
     );
}

export default HomeLayout;