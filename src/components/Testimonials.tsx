
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Developer at TechCorp",
    content: "Palak is an exceptional developer with great attention to detail. Her ability to quickly adapt to new technologies is impressive. Working with her on our project was a seamless experience.",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Project Manager at WebSolutions",
    content: "I had the pleasure of working with Palak on a complex web application project. Her technical expertise and problem-solving skills were invaluable to the success of our project.",
    avatar: "/placeholder.svg"
  },
  {
   id: 3,
    name: "Mehak Patel",
    role: "BCA UG Student",
    content: "Palak is a fantastic developer—creative, hardworking, and always brings positive energy to the team. You can always count on her to get things done with a smile!"
   avatar: "/placeholder.svg"
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title gradient-text">Testimonials</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Here's what people say about working with me.
        </p>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-50 border-none shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className="absolute -top-1 -left-1 bg-portfolio-primary rounded-full p-1">
                            <MessageSquare size={12} className="text-white" />
                          </div>
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote className="italic text-gray-600 border-l-4 border-portfolio-primary pl-4 py-2 mb-2">
                        "{testimonial.content}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              &larr;
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              &rarr;
            </Button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-portfolio-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
