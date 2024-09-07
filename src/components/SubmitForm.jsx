import { Input } from "@/components/ui/input"
import RandomPopcornBackground from "./RandomPopcorn";

function SubmitForm() {
    return (
        <section className="bg-[#1A1A1A]">
          <div className="absolute">
            <RandomPopcornBackground />
          </div>
          <div className="py-48 px-6 md:px-12 lg:px-20 ">
            <div className="bg-[#1A1A1A] flex flex-col items-center justify-center">
            <h1 className="text-white z-10 text-center text-6xl font-bold">Find Your Next Movie</h1>
            <p className="text-2xl z-10 text-center text-gray-300 my-8">Enter your movie preferences and get personalized suggestions.</p>
            <div className="w-full z-10 max-w-md">
              <Input
                type="text"
                placeholder="Enter movie preferences"
                className="bg-[#2a2a2a] border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-white rounded-md py-3 px-4 w-full"
              />
            </div>
            </div>
          </div>
        </section>
    );
}

export default SubmitForm;