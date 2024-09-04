import { HomePage } from "./_components/home";
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return ( 
    <div className="flex flex-col min-h-screen dark:bg-[#1F1F1F]">
      <Analytics />
        <main className="h-full">
          <div className="flex flex-col items-center justify-center md:justify-start text-center">
            <HomePage />
          </div>
        </main>
    </div>
   );
}
 
export default Home;