import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      {/* Header */}
      <div className="w-full md:max-w-xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
            <button className="bg-gradient-to-r from-[#1E9478] to-[#00A67F] text-white text-sm px-4 py-2 rounded-full flex items-center">
            <img 
              src="/magic.png" 
              alt="Magic icon" 
              className="h-5 w-5 mr-2"
            />
            AI Grant Assistant
            </button>
        </div>
        <h2 className="text-4xl font-bold text-black mb-4">Manage your grant application - All in one place</h2>
        <p className="text-lg text-gray-600">
          Fill your grant information once and let the Ai assistant aid you fill many more with review to help you win effortlessly
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-[1200px] mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Access to grants - Left top card */}
          <div className="col-span-12 md:col-span-7 rounded-3xl overflow-hidden shadow-lg" 
               style={{
                 background: 'linear-gradient(90deg, #00B78B 0%, #000000 57%, #00cb9a 100%)'
               }}>
            <div className="px-6 pt-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Access to grants</h3>
              <p className="text-white text-opacity-90 mb-4">
                Gain access to a repo of grant programs across Nigeria
              </p>
              <div className="bg-white bg-opacity-10 rounded-t-3xl overflow-hidden shadow-md">
                <div className="relative h-72">
                  <img 
                    src="/images/grants.png" 
                    alt="Grant programs list interface"
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Autofill with AI - Right top card */}
          <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl overflow-hidden shadow-lg">
            <div className="px-6 pt-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Autofill with AI</h3>
              <p className="text-white text-opacity-90 mb-4">
                AI autofill for you based on your profile information
              </p>
              <div className="bg-white bg-opacity-10 rounded-t-3xl overflow-hidden shadow-md">
                <div className="relative h-72">
                  <img 
                    src="/images/autofill.png" 
                    alt="AI autofill interface"
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* AI reviews - Left bottom card */}
          <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-emerald-500 via-teal-500 to-teal-600 rounded-3xl overflow-hidden shadow-lg">
            <div className="px-6 pt-6 text-white">
              <h3 className="text-xl font-semibold mb-2">AI reviews</h3>
              <p className="text-white text-opacity-90 mb-4">
                AI reviews your application to grants for better chance to win
              </p>
              <div className="bg-white bg-opacity-10 rounded-t-3xl overflow-hidden shadow-md">
                <div className="relative h-72">
                  <img 
                    src="/images/ai_reviews.png" 
                    alt="AI review interface"
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Unified details - Right bottom card (wider) */}
          <div className="col-span-12 md:col-span-7 rounded-3xl overflow-hidden shadow-lg"
               style={{
                 background: 'linear-gradient(90deg, #00B78B 0%, #000000 57%, #00cb9a 100%)'
               }}>
            <div className="px-6 pt-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Unified details</h3>
              <p className="text-white text-opacity-90 mb-4">
                All information ever needed for a grant platform unified in one
              </p>
              <div className="bg-white bg-opacity-10 rounded-t-3xl overflow-hidden shadow-md">
                <div className="relative h-72">
                  <img 
                    src="/images/unified.png" 
                    alt="Unified details interface"
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;