// pages/index.js or pages/landingPage.js
import Navbar from '../components/Navbar';
import Footer from '../Footer';

const LandingPage = () => {
  return (
    <>
      <div className="container mx-auto mt-8 px-4">
        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-gray-100 p-4 shadow-md">
              <h3 className="font-bold text-lg">The Great Kate</h3>
              <img src="/images/kate.jpg" alt="Great Kate" className="my-4"/>
              <p>Everyone In Old Hollywood Was On Acid</p>
              <p className="text-sm mt-4">Read More</p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="col-span-6">
            <div className="shadow-md">
              <img src="/images/main-article.jpg" alt="Main Article" className="w-full"/>
              <div className="p-4">
                <h2 className="text-2xl font-bold">
                  Bette and Joan Writers Are Working on a Vivien Leigh Biopic
                </h2>
                <p className="text-sm text-gray-600">By Veronika Elizabeth on February 28, 1960</p>
                <p className="mt-4">
                  Bette and Joan are working on a movie about the life of Vivien Leigh, star of "A Streetcar Named Desire" and "Gone with the Wind."
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="bg-gray-100 p-4 shadow-md">
              <h3 className="font-bold text-lg">Good Times Now</h3>
              <p className="mt-4">The brand new road movie starring...</p>
              <button className="bg-black text-white px-4 py-2 mt-4">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
