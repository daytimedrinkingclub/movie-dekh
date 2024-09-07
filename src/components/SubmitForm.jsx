function SubmitForm() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Next Movie</h1>
          <p className="text-lg text-gray-300 mb-8">Enter your movie preferences and get personalized suggestions.</p>
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Enter movie preferences"
              className="bg-[#2a2a2a] border-none text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none rounded-md py-3 px-4 w-full"
            />
          </div>
        </section>
    );
}

export default SubmitForm;