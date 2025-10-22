// import {} from "@hook";
import {
  Facebook,
  Linkedin,
  LucideLocationEdit,
  Mail,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { cn } from "../lib/utils";

export const Contact = () => {
  const [issubmitting, setissubmitting] = useState(false);

  const schema = yup.object().shape({
    fullName: yup.string().required("your full name is required"),
    email: yup.string().email().required("email is required"),
    message: yup.string().required("enter a message"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlesubmits = (e) => {
    // e.preventDefault();
    console.log(e);
    setissubmitting(true);
    setTimeout(() => {
      setissubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary">
      <div className="container max-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste fugiat
          laboriosam repellat porro mollitia cumque sit? Pariatur beatae in
          ipsum accusantium maiores quas quae neque, alias aut, veniam ad
          ratione.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="3"
                  >
                    hhhhhh@hhhhhh
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone size={3} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="3"
                  >
                    787654231426
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LucideLocationEdit
                    size={3}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Contact</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="3"
                  >
                    Nairobi
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4 justify-center">
                <a href="">
                  <Linkedin />
                </a>
                <a href="">
                  <Twitter />
                </a>
                <a href="">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-x5">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form
              action=""
              className="space-y-6"
              onSubmit={handleSubmit(handlesubmits)}
            >
              <div /*className="flex justify-center p-y-3"*/>
                <label
                  htmlFor="name"
                  className="font-medium mb-2 text-sm block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName")}
                  name="fullName"
                  placeholder="Elvis Omondi"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlineS-hidden focus:ring-2 focus:ring-primary"
                />
                {<p>{errors.email?.message}</p>}
              </div>
              <div /*className="flex justify-center p-y-3"*/>
                <label
                  htmlFor="name"
                  className="font-medium mb-2 text-sm block"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  placeholder="Elvis@Omondi"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlineS-hidden focus:ring-2 focus:ring-primary"
                />
                <p>{errors.email?.message}</p>
              </div>
              <div /*className="flex justify-center p-y-3"*/>
                <label
                  htmlFor="message"
                  className="font-medium mb-2 text-sm block"
                >
                  Write a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  {...register("message")}
                  placeholder="........"
                  required
                  className="w-full px-4 py-3 resize-none rounded-md border border-input bg-background focus:outlineS-hidden focus:ring-2 focus:ring-primary"
                />
                {<p>{errors.email?.message}</p>}
              </div>
              <button
                type="submit"
                disabled={issubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  ""
                )}
              >
                {issubmitting ? "sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
