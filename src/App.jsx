function App() {
  return (
    <>

        {/* <!-- Navbar --> */}
      <header class="navbar">
        <div class="logo">
            <img src="./logo.png" alt="Company Logo" />
          <div class="logo-content">
            <span>COMPANY</span>
          <small>business tagline</small>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>
        <a href="#" class="quote-btn">Get A Quote</a>
      </header>

      {/* <-- Hero Section --> */}
      <section class="hero">
        <div class="hero-content">
          <h1>Your Resume <span class="highlight">Deserves A Yes</span> <br/> Let’s Make It Happen</h1>
          <p>If your resume isn’t getting responses, it’s time for an upgrade. Get an ATS-optimized resume crafted by HR experts to help you land more interviews.</p>
          <div class="hero-buttons">
            <a href="#" class="btn primary">Resume Packages</a>
            <a href="#" class="btn secondary">Contact Us</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="./student.png" alt="Happy Student"/>
          <div class="rating-box">
              <strong class='rating'>4.9</strong>
             <div class='rating-content'>
              <img src="./star.png" alt="" />
              <span>Instructor Rating</span>
             </div>
          </div>
          <div class="count-box">
            <div class='count-content'>
              <strong>260+</strong> 
            <span>Online Resume Created</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section class="features">
        <h2>What You Get</h2>
        <p class="subtitle">You’re Not Just Another Applicant And Your Resume Shouldn’t Look Like One</p>
        <div class="feature-grid">
          <div class="feature-card">
            <img src="images/ats.png" alt=""/>
            <h3>A Resume That Passes ATS Filters</h3>
            <p>Get a professionally written, keyword-optimized resume that lands in recruiter inboxes — not rejection piles.</p>
          </div>
          <div class="feature-card">
            <img src="images/cover.png" alt=""/>
            <h3>A Cover Letter That Gets Read</h3>
            <p>Stand out with a cover letter that speaks directly to the role and reflects your strengths.</p>
          </div>
          <div class="feature-card">
            <img src="images/linkedin.png" alt=""/>
            <h3>A LinkedIn Profile That Works For You</h3>
            <p>Attract the right eyes, start conversations, and show up in recruiter searches.</p>
          </div>
          <div class="feature-card">
            <img src="images/interview.png" alt=""/>
            <h3>Interview Confidence</h3>
            <p>Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly.</p>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App;
