import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h2 className="title">
        <span className="icon-envelope"></span>contact us
      </h2>
      <p className="sub-title">
        contact us for more information and get notified when i publish some
        thing new
      </p>
      <div className="flex">
        <form >
          <div className="flex">
            <label htmlFor="email">email address:</label>
            <input required type="email" name="" id="email" />
          </div>

          <div style={{marginTop: "24px"}} className="flex">
            <label htmlFor="message">your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>
          <button className="submit">submit</button>
        </form>
        <div className="animation"></div>
      </div>
    </section>
  );
};

export default Contact;
