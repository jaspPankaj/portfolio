import { useState } from "react";
import { cn } from "../lib/util";
import { Github, Linkedin, Mail, MailCheck, MapPin, Phone, PinIcon, Send, Youtube } from "lucide-react";


import {useToast} from "../hooks/use-toast";


export const ContactSection = () =>{

    const {toast}=useToast();

    const [isSubmitting,setIsSubmitting]=useState(false);

   const handleSubmit = (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  setTimeout(() => {
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);  

    e.target.reset();        
  }, 1500);
};



    return <section id="contact" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch  </span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate ? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6 justify-center">
                    <div className="flex item-start space-x-4 bg-foreground/10 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium text-left">Email</h4>
                            <a href="mailto:jasp.pankaj@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                jasp.pankaj@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex item-start space-x-4 bg-foreground/10 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium text-left">Mobile No.</h4>
                            <a href="tel:+918587893419"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                +91 8587893419
                            </a>
                        </div>
                    </div>
                    <div className="flex item-start space-x-4 bg-foreground/10 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium text-left">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Noida, India.
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex justify-center space-x-4" >
                        <a href="https://www.linkedin.com/in/jasppankaj/" target="_blank"
                           className="rounded-xs  transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#0A66C2]">
                            <Linkedin/>
                        </a>
                        <a href="https://github.com/jasppankaj" target="_blank"
                            className="">
                            <Github size={24}/>
                        </a>
                        <a href="https://www.youtube.com/@JaspPankaj" target="_blank"
                            className="rounded-xs  transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#FF0000]">
                            <Youtube size={24}/>
                        </a>
                    </div>
                </div>

                

            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Enter Your Name.." />                                
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="example@gmail.com" />                                
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                row={3 }
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello ,I'd like to talk about..." />                                
                        </div>
                        <button disabled={isSubmitting} type="submit" className={cn(
                            "cosmic-button w-full flex justify-center items-center gap-2",

                        )}>
                            {isSubmitting ? "Sending.." : "Send Message"} <Send size={16}/>

                        </button>

                    </form>
                </div>
        </div>
    </div>
    
    </section>
};

