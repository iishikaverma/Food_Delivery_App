const Contact =() => {
    return (
        <div>
            <div className="text-center mt-12 mb-12">
                <h1 className="text-4xl font-extrabold text-[#36210f] mb-4">
                    Contact Us
                </h1>
                <p className="text-[#7a5a44] text-lg">
                    We'd love to hear from you. Reach out anytime!
                </p>
            </div>

            <div className="max-w-4xl mx-auto border border-[#e7d7c8] rounded-2xl mb-12 shadow-[0_10px_30px_rgba(54,33,15,0.15)] p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                    <div>
                        <h2 className="text-2xl font-bold text-[#36210f] mb-4">
                            Get in Touch
                        </h2>

                        <p className="text-[#7a5a44] mb-6">
                            Have a question, feedback, or suggestion?  
                            We're always happy to help.
                        </p>

                        <div className="space-y-4 text-[#36210f]">
                            <p>
                                <span className="font-semibold">Address:</span>  
                                <br/>
                                Noida, India
                            </p>

                            <p>
                                <span className="font-semibold">Email:</span>  
                                <br/>
                                support@cravory.com
                            </p>

                            <p>
                                <span className="font-semibold">Phone:</span>  
                                <br/>
                                +91 9XXXXXXXXX
                            </p>
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-[#36210f] mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-[#e7d7c8]
                                        rounded-lg outline-none
                                        focus:border-[#ec5600]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#36210f] mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-[#e7d7c8]
                                        rounded-lg outline-none
                                        focus:border-[#ec5600]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#36210f] mb-1">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Write your message here..."
                                className="w-full px-4 py-2 border border-[#e7d7c8]
                                        rounded-lg outline-none resize-none
                                        focus:border-[#ec5600]"
                            />
                        </div>

                        <button
                        type="submit"
                        className="w-full mt-4 bg-[#ec5600] text-white
                                    py-2 rounded-full font-semibold
                                    hover:bg-[#d94f00]
                                    transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;