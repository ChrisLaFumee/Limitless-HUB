// React import not needed with the new JSX transform

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-gray py-10 mt-20 border-t border-gray-800">
      <div className="max-w-full mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Limitless Progressions. All rights
          reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.tiktok.com/@coach_chris"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@limitlessprogressions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            YouTube
          </a>
          <a
            href="mailto:chrislafumee@gmail.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
