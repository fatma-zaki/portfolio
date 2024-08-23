import './hero.css'

function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section">
        {/* avatar */}
        <div className="parent-avatar flex">
          <img src="./mypic.png" className='avatar' alt="avatar" />
          <div className='icon-verified'></div>
        </div>
        {/* title */}
        <h1 className='title'>software engineer , frontend developer</h1>
        {/* subtitle */}
        <p className='sub-title'>I am Fatma, Junior Frontend Developer with a strong foundation in HTML, CSS, and JavaScript.
Skilled in creating responsive and user-friendly web interfaces with experience in the
popular framework React. Familiar with version control systems like Git and have a keen
eye for detail and design. Eager to contribute to dynamic development teams and grow
technical skills through hands-on experience. Committed to continuous learning and
staying updated with the latest industry trends and best practices.
        </p>
        {/* icons */}
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section">animation</div>

    </section>
  )
}

export default Hero