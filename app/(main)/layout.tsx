import { Header } from "./_components/header";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full dark:bg-[#1F1F1F]">
            <Header />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
     );
}
 
export default HomeLayout;