import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function SubmitForm() {
    const [preferences, setPreferences] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/evaluate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: preferences }),
            });
            const data = await response.json();
            setGenre(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
        setPreferences("");
    };

    return (
        <section className="container mx-auto">
          <div className="py-48 px-6 md:px-12 lg:px-20 ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white z-10 text-center text-6xl font-bold">Find Your Next Movie</h1>
              <p className="text-2xl z-10 text-center text-gray-300 my-10 md:my-14">Enter your movie preferences and get personalized suggestions.</p>
              <form onSubmit={handleSubmit} className="w-full z-10 max-w-md">
                <div className="flex md:flex-row flex-col justify-center">
                  <Input
                    type="text"
                    placeholder="Enter movie preferences"
                    className="bg-[#2a2a2a] border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-white rounded-l-md py-3 px-4 w-full"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                  <Button type="submit" className="bg-white h-10 md:mx-4 mx-auto md:my-auto my-4 hover:bg-white/90 text-black rounded-r-md">
                    Submit
                  </Button>
                </div>
              </form>
              {genre && (
                <p className="text-white text-xl mt-4">Suggested genre: {genre}</p>
              )}
            </div>
          </div>
        </section>
    );
}

export default SubmitForm;