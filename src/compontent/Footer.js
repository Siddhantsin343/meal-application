const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} FoodExpress — All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;