import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
      setSuccess("✅ Message sent successfully!");
      reset();
    } catch (err) {
      setError("❌ Failed to send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-br from-purple-100 via-white to-blue-100"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left: Form */}
        <div
          ref={formRef}
          className="w-full lg:w-1/2 bg-white/90 backdrop-blur-xl border border-white/30 shadow-xl rounded-3xl p-10"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 text-portfolio-violet text-3xl font-bold mb-2">
              <Mail className="w-8 h-8" /> Contact Me
            </div>
            <p className="text-slate-600 text-base">
              Let’s connect! I’m always open to new projects and ideas.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="user_name" className="font-medium text-slate-700">
                Name
              </label>
              <input
                id="user_name"
                {...register("user_name", { required: true })}
                className="w-full px-4 py-3 mt-1 rounded-xl border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 bg-white text-slate-800 outline-none transition"
                placeholder="Your Name"
              />
              {errors.user_name && (
                <p className="text-sm text-red-500 mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="user_email" className="font-medium text-slate-700">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                {...register("user_email", { required: true })}
                className="w-full px-4 py-3 mt-1 rounded-xl border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 bg-white text-slate-800 outline-none transition"
                placeholder="you@example.com"
              />
              {errors.user_email && (
                <p className="text-sm text-red-500 mt-1">Email is required</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: true })}
                className="w-full px-4 py-3 mt-1 rounded-xl border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 bg-white text-slate-800 outline-none transition resize-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">Message is required</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold shadow-md hover:from-violet-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {success && (
              <div className="text-green-600 text-center font-medium mt-3">
                {success}
              </div>
            )}
            {error && (
              <div className="text-red-600 text-center font-medium mt-3">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Right: Illustration */}
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/contact.svg"
            alt="Contact Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
