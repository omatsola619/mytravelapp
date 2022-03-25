import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Icons from "../components/Icons";
import Date from "../components/Date";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>my travel app</title>
        <meta
          name="description"
          property="keyword"
          content="my next js travel app"
          key="title"
        />
      </Head>
      <div className="container-fluid1">
        {/*navbar component*/}
        <Navbar />
        <hr />
        {/*main content starts here */}
        <main>
          <h3>Six Days In Dubai</h3>
          <div className="main">
            <div className="content">
              <div className="comp">
                <div className="logo">
                  <img
                    src="/logo.png"
                    className="logo-img img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="title-box text-wrap">
                  <div className="up text-center text-wrap">HILTON HOTEL</div>
                  <div className="down text-center text-wrap">
                    POWERED BY TRAVEL JINNI
                  </div>
                </div>
              </div>
              <div className="info">
                <h2 className="text-center info-head text-wrap">
                  Your Trip <br />
                  Awaits You!
                </h2>
                <p className="text-center info-details">
                  We have taken some time to help plan your trip to make it a
                  memorable one. Access your calendar now for even more things
                  you can do on your trip.
                </p>
                <div className="but text-center">
                  <button className="info-button">Access Calendar</button>
                </div>
              </div>
            </div>
          </div>
          <Date />
          <Icons />
        </main>
      </div>
    </>
  );
}
