import { Header } from "./_components/header";
import { HomePage } from "./_components/home";
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return ( 
    <div className="flex flex-col min-h-screen dark:bg-[#1F1F1F]">
      <Analytics />
      <Header />
      <main className="h-full pt-20 sm:pt-24 md:pt-32">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <HomePage />
        </div>
      </main>
    </div>
   );
}
 
export default Home;