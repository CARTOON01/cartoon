import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { HomePage } from "./_components/home";

const Home = () => {
  return ( 
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
   );
}
 
export default Home;