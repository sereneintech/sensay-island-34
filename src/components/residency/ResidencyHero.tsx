
export default function ResidencyHero() {
  return (
    <section className="bg-gradient-to-b from-sensay-stone to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-sensay-gold/20 text-sensay-navy rounded-full mb-4 font-medium">
            Citizenship Process
          </span>
          <h1 className="mb-6 gradient-text">Join the Journey</h1>
          <p className="text-lg text-sensay-navy/80 mb-8">
            Begin your path to becoming a citizen of Sensay Island. Our application process is designed to be 
            straightforward and meaningful. Complete each step at your own pace, and feel free to return to 
            any section before final submission.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-sensay-teal flex items-center justify-center text-white">
                1
              </div>
              <span className="ml-2 text-sm font-medium">Personal Info</span>
            </div>
            <div className="w-8 h-1 bg-sensay-stone rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-sensay-stone flex items-center justify-center text-sensay-navy">
                2
              </div>
              <span className="ml-2 text-sm font-medium">Professional</span>
            </div>
            <div className="w-8 h-1 bg-sensay-stone rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-sensay-stone flex items-center justify-center text-sensay-navy">
                3
              </div>
              <span className="ml-2 text-sm font-medium">Motivation</span>
            </div>
            <div className="w-8 h-1 bg-sensay-stone rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-sensay-stone flex items-center justify-center text-sensay-navy">
                4
              </div>
              <span className="ml-2 text-sm font-medium">Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
