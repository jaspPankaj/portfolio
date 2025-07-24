import { useState } from "react";
import { cn } from "../lib/util";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/myzpeqjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });
        }, 1500);
      } else {
        console.log("Form submission failed.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log("Error in submitting form", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex item-start space-x-4 bg-foreground/10 p-4 rounded-xl hover:scale-105 transition-transform">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:jasp.pankaj@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    jasp.pankaj@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex item-start space-x-4 bg-foreground/10 p-4 rounded-xl hover:scale-105 transition-transform">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Mobile No.</h4>
                  <a
                    href="tel:+918587893419"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 8587893419
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex item-start space-x-4 bg-foreground/10 p-4 rounded-xl hover:scale-105 transition-transform">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <p className="text-muted-foreground">Noida, India.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-5">
                <div className="p-3 rounded-full border border-foreground hover:bg-[#0A66C2] hover:border-0 hover:scale-110">
                    <a
                        href="https://www.linkedin.com/in/jasppankaj/" target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={24} className="hover:scale-120"/>
                    </a>
                </div>
                <div className="p-3 rounded-full border border-foreground hover:bg-white hover:text-black">
                    <a href="https://github.com/jasppankaj" target="_blank" rel="noopener noreferrer">
                        <Github size={24}  className="hover:scale-120"/>
                    </a>
                </div>
                <div className="p-3 rounded-full border border-foreground hover:bg-[#FF0000] hover:border-0 hover:scale-110">
                    <a href="https://www.youtube.com/@JaspPankaj" target="_blank">
                        <Youtube size={24} className="hover:scale-120"/>
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/90 p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Name.."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium mb-3 ">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex justify-center items-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
