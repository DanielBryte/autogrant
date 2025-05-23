import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: '"AutoGrant is an amazing product, I literally finished 12 grant applications within 10 minutes, this is what it takes me to finish one manually. This product have saved me hundreds of hours for me."',
      author: 'Daniella James',
      handle: '@daniella'
    },
    {
      id: 2,
      quote: '"Holy shit! AutoGrant is an great product, I literally finished 12 grant applications within 10 minutes, this is what it takes me to finish one manually. This product have saved me hundreds of hours for me."',
      author: 'Daniella James',
      handle: '@daniella'
    },
    {
      id: 3,
      quote: '"Holy shit! AutoGrant is an great product, I literally finished 12 grant applications within 10 minutes, this is what it takes me to finish one manually. This product have saved me hundreds of hours for me."',
      author: 'Daniella James',
      handle: '@daniella'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          What our customers say about us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border border-gray-100 rounded-lg p-8 shadow-sm">
              <div className="text-emerald-600 mb-6">
                <img
                  src="/quotes.png"
                  alt="Quotes icon"
                  width={24}
                  height={24}
                  className="text-emerald-600"
                />
              </div>
              
              <p className="text-gray-800 text-lg mb-10">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <div className="mr-3">
                  {/* Placeholder for profile image - you'll replace this with your imported image */}
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src="/api/placeholder/40/40" 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;