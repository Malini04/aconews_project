// components/FeaturedStories.js
const FeaturedStories = () => (
    <section className="featured-stories">
      <h3>Featured Stories</h3>
      <div className="grid">
        <div className="story">
          <img src="/images/story1.jpg" alt="Story 1" />
          <h4>Leading Article - Better Way to Educate Primary School</h4>
        </div>
        <div className="story">
          <img src="/images/story2.jpg" alt="Story 2" />
          <h4>13 Photographers Who Captured the Epic Beauty of Children</h4>
        </div>
        {/* More stories */}
      </div>
    </section>
  );
  
  export default FeaturedStories;
  