"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");


  useEffect(() => {
    fetch(`/api/contact/get`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setContact(data); 
      });
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact/inquiry/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, phone, type, message }),
      });
  
      const data = await response.json();
      console.log("Response:", data);
  
      if (data.message === "Inquiry created") {
        alert("✅ Inquiry added successfully!");

        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setType("");
        setMessage("");
        //router.push("/contact");
      } else {
        alert("❌ Failed to add inquiry. Try again.");
      }
    } catch (err) {
      console.error("Error submitting inquiry:", err);
      alert("❌ Something went wrong.");
    }
  };
  

  return (
    <>
      <div className="section-banner bg-1">
        <div className="container">
          <div className="banner-spacing">
            <div className="section-info">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-content">
                <div className="header-content">
                  <h2>We d Love To Hear From You</h2>

                  <p>
                    For verifications, please email{" "}
                    <a href="#">registrar@sips.com</a>
                  </p>
                </div>

                <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
  type="text"
  name="firstname"
  className="form-control"
  id="firstname"
  value={firstname}
  onChange={(e) => setFirstname(e.target.value)}
  required
  placeholder=""
/>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name2"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                            data-error="Please enter your name"
                            placeholder=""
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            data-error="Please enter your email"
                            placeholder=""
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone_number"
                            className="form-control"
                            id="phone_number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            data-error="Please enter your phone number"
                            placeholder=""
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Inquiry Type</label>
                          <select
  className="form-select"
  aria-label="Default select example"
  onChange={(e) => setType(e.target.value)}
  required
>
  <option value="" disabled selected>
    Select Inquiry Type
  </option>
  <option value="Admission">Admission</option>
  <option value="One">One</option>
  <option value="Two">Two</option>
  <option value="Three">Three</option>
</select>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Inquiry</label>
                          <textarea
                            name="message"
                            id="message"
                            value={message}
                            className="form-control"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            data-error="Please enter your message"
                            placeholder=""
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn">
                          Submit Now
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
                <div id="map" className="map-pd">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"></iframe>
                </div>

                <div className="info-details">
                  <ul>
                    <li>
                      <i className="bx bxs-phone-call"></i> Phone -{" "}
                      <a href="tel:+8495160885">{contact.phone}</a>
                    </li>

                    <li>
                      <i className="bx bxs-map"></i>Address: {contact.address}
                    </li>
                    <li>
                      <i className="bx bxs-envelope"></i>
                      <a className="info-mail" href="{contact.email}">
                        Email: {contact.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
