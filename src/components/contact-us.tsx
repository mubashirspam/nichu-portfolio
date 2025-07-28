import React from "react";
import {
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Make <span className="text-purple-400">History</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          If you believe &apos;small town&apos; doesn&apos;t mean small
          dreams, want to learn digital skills that pay bills, or are tired of
          marketing fluff and want real strategies — let&apos;s connect!
        </p>

        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-3xl border border-purple-500/20 mb-8">
          <h3 className="text-2xl font-bold mb-6">
            Ready to Grow Your Business?
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+919048455359"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              Call: +91 9048 455 359
            </a>
            <a
              href="https://wa.me/919048455359"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp Me
            </a>
          </div>
        </div>

        <div className="text-gray-400 mb-8">
          <p className="mb-4">
            Also, my DMs are open even if you just want to rant about bad ads
            you&apos;ve seen— I&apos;ll probably agree and send you a meme
            about it! 😄
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8">
          <p className="text-gray-400">
            Proudly representing Kerala on the global digital stage 🌴
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;