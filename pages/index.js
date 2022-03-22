import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>my travel app</title>
        <meta property="keyword" content="My page title" key="title" />
      </Head>
      <div className="container-fluid1">
        {/*navbar starts here */}
        <navbar>
          <div className="left">
            <div className="days">Remaining Days to my Trip</div>
            <div className="time">
              <div className="time-count">
                <h2>10</h2>
                <span>weeks</span>
              </div>
              <div className="time-count">
                <h2>06</h2>
                <span>DAYS</span>
              </div>
              <div className="time-count">
                <h2>45</h2>
                <span>HOURS</span>
              </div>
              <div className="time-count">
                <h2>25</h2>
                <span>MINUTES</span>
              </div>
              <div className="time-count">
                <h2>06</h2>
                <span>SECONDS</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="trips">My Trips</span>
            <span>
            <i className="bi bi-globe"></i>En ($)
            </span>
          </div>
        </navbar>
        <hr />
        {/*main content starts here */}
        <main>
          <h3>Six Days In Dubai</h3>
          <div className="main">
            <div className="content">
              <div className="comp">
                <div className="logo">
                  <img src="/logo.png" className="logo-img img-fluid" />
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
                  <button className="info-button">
                  Access Calendar
                </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="date">
            <ul style={{ listStyleType: "none" }}>
              <li>FEB</li>
              <li className="special">15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
            </ul>
          </div>
          <div className="icons">
            <ul style={{listStyleType: "none"}}>
              <li><i className="fa fa-user"></i></li>
              <li><i className="fa fa-question-circle"></i></li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
