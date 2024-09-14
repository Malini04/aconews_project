// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white mt-8 p-4">
        <div className="container mx-auto">
          <h4 className="text-lg font-bold">Subscribe to our Newsletter</h4>
          <form className="flex mt-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full p-2 text-black"
            />
            <button className="bg-blue-600 text-white p-2 ml-2">Sign Me Up</button>
          </form>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  