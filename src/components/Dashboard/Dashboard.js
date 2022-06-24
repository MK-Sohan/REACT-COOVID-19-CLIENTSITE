import React from "react";
import "./dashboard.css";
import { Link, Outlet } from "react-router-dom";
import { AiTwotoneHome, AiOutlineAreaChart } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div class="dashboard-river mb-16 relative ">
      <div class="dashboard-container">
        <div class="dashboard">
          <div class="ui-row-1"></div>

          <div class="ui-row-2">
            <div class="left-sidebar">
              <div>
                <Link to="/dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90%"
                    height="90%"
                    viewBox="0 0 16 16"
                    className="svgg"
                  >
                    <g transform="translate(958.014 -1049.362)">
                      <path
                        fill="#f05542"
                        fill-rule="evenodd"
                        d="m -948,1054.3895 0,9.9454 2,0 0,-9.9454 -2,0 z"
                      />
                      <path
                        fill="#f17f53"
                        fill-rule="evenodd"
                        d="m -951,1057.3622 0,6.9454 2,0 0,-6.9454 -2,0 z"
                      />
                      <path
                        fill="#f8b84e"
                        fill-rule="evenodd"
                        d="m -954,1060.3895 0,3.9454 2,0 0,-3.9454 -2,0 z"
                      />
                      <rect
                        width="2"
                        height="11.947"
                        x="-945"
                        y="1052.389"
                        fill="#25b39e"
                        fill-rule="evenodd"
                      />
                      <path
                        fill="none"
                        stroke="#2b4255"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M-957.50744 1063.8626l14.98665 0M-956.50005 1064.8551l0-14.9866"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
              <div>
                <Link to="/dashboard/worldcovidinfo">
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 48 48"
                      width="90%"
                      height="90%"
                      className="svgg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M40.9,25c0.4,1.4,1.7,2.4,3.2,2.4c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4c-1.5,0-2.8,1-3.2,2.4h-0.6
	c-0.2-3.5-1.6-7-4.1-9.8l1.6-1.6c0.7,0.4,1.5,0.7,2.3,0.7c1.2,0,2.3-0.5,3.1-1.3c1.7-1.7,1.7-4.5,0-6.2c-1.7-1.7-4.5-1.7-6.2,0
	c-1.5,1.5-1.7,3.7-0.6,5.4l-1.7,1.7c-0.5-0.4-0.9-0.8-1.4-1.1c0,1.8-1.4,3.2-3.2,3.2c-0.3,0-0.6-0.1-0.9-0.1l-2,2.5L25.7,15l1.9-2.4
	C27.2,12,27,11.3,27,10.6c0-1,0.5-1.9,1.1-2.4c-1-0.3-2.1-0.4-3.1-0.5V7.1c1.4-0.4,2.4-1.7,2.4-3.2c0-1.9-1.5-3.4-3.4-3.4
	c-1.9,0-3.4,1.5-3.4,3.4c0,1.5,1,2.8,2.4,3.2v0.6c-3.6,0.2-7.1,1.6-9.8,4.1l-1.6-1.6c1.1-1.7,0.9-4-0.6-5.4C9.2,3,6.4,3,4.7,4.7
	C3,6.4,3,9.2,4.7,10.9c0.9,0.9,2,1.3,3.1,1.3c0.8,0,1.6-0.2,2.3-0.7l1.6,1.6C9.3,16,7.9,19.5,7.7,23H7.1c-0.4-1.4-1.7-2.4-3.2-2.4
	c-1.9,0-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4c1.5,0,2.8-1,3.2-2.4h0.6c0.2,3.5,1.6,7,4.1,9.8l-1.6,1.6c-0.7-0.4-1.5-0.7-2.3-0.7
	c-1.2,0-2.3,0.5-3.1,1.3c-1.7,1.7-1.7,4.5,0,6.2c0.9,0.9,2,1.3,3.1,1.3s2.3-0.4,3.1-1.3c1.5-1.5,1.7-3.7,0.6-5.4l1.6-1.6
	c2.8,2.5,6.3,3.8,9.8,4.1v0.6c-1.4,0.4-2.4,1.7-2.4,3.2c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4c0-1.5-1-2.8-2.4-3.2v-0.6
	c3.5-0.2,7-1.6,9.8-4.1l1.6,1.6c-1.1,1.7-0.9,4,0.6,5.4c0.8,0.8,1.9,1.3,3.1,1.3s2.3-0.5,3.1-1.3c1.7-1.7,1.7-4.5,0-6.2
	c-1.5-1.5-3.7-1.7-5.4-0.6l-1.6-1.6c2.5-2.8,3.8-6.3,4.1-9.8H40.9z M17.8,25.7c0,1.6-1.3,2.9-2.9,2.9S12,27.2,12,25.7
	c0-1.6,1.3-2.9,2.9-2.9c0.8,0,1.6,0.3,2.1,0.9l3.4-1.1l0.6,1.9L17.8,25.7C17.7,25.6,17.8,25.6,17.8,25.7z M21.4,19.5l-1-2.1
	c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2c0,0.5-0.2,0.9-0.4,1.3l1,2.2L21.4,19.5z M30.8,34.4
	c-1.2,0-2.2-1-2.2-2.2c0-0.2,0-0.4,0.1-0.6l-1.9-2.3l1.6-1.3l1.8,2.1c0.2-0.1,0.5-0.1,0.7-0.1c1.2,0,2.2,1,2.2,2.2
	C33,33.4,32,34.4,30.8,34.4z M30.7,24.6c-1.5,0-2.7-0.9-3.3-2.2h-3.5v-2h3.3c0.3-1.7,1.8-3,3.5-3c2,0,3.6,1.6,3.6,3.6
	C34.3,23,32.7,24.6,30.7,24.6z"
                      />
                    </svg>
                  </>
                </Link>
              </div>
              <div>
                <Link to="/dashboard/users">
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90%"
                      height="90%"
                      className="svgg"
                      viewBox="0 0 62 62"
                    >
                      <g
                        fill="#000"
                        fill-rule="evenodd"
                        transform="translate(-1 -1)"
                      >
                        <path d="M51.81 35.962h-6.4c-.915 0-1.524-.61-1.524-1.524s.61-1.524 1.524-1.524h6.4c1.523 0 3.047-.304 4.571-.61.914-.304 1.524-.609 2.133-.914.61-.304.915-1.219.915-1.828 0-.61-.305-1.22-.61-1.829-1.524-1.828-4.267-3.047-7.924-4.266-.305 0-.305-.305-.61-.305-.914-.61-1.523-1.524-1.828-2.438 0-1.22.61-2.134 1.524-2.743 2.133-3.048 3.352-5.79 3.048-8.229-.305-1.523-.915-2.742-2.134-3.657-2.133-1.524-5.18-1.524-7.01 0-1.218.915-1.828 2.134-2.133 3.657-.304 2.438.915 5.181 3.048 8.229.61.61.305 1.524-.305 2.133-.61.61-1.524.305-2.133-.304-3.048-3.658-4.267-7.315-3.657-10.667.305-2.133 1.524-4.267 3.352-5.486 3.048-2.438 7.62-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.305.304-.305.609-.61.609 0 0 .305 0 .305.305 3.962 1.219 7.01 3.047 8.838 5.18.915.915 1.524 2.439 1.524 3.963a5.332 5.332 0 01-2.133 4.266c-.914.61-1.829 1.22-3.048 1.524-1.828 0-3.657.305-5.485.305zM18.59 35.962h-6.4c-2.133 0-3.961-.305-5.485-.914-1.22-.305-2.134-.915-3.048-1.524-1.219-.914-2.133-2.743-2.133-4.267 0-1.524.61-2.743 1.524-3.962 2.133-2.133 5.18-3.657 9.142-4.876 0 0 .305 0 .305-.305 0 0-.305-.304-.305-.61C9.143 15.849 7.62 11.887 8.23 8.839c.304-2.133 1.523-4.267 3.352-5.486 3.048-2.438 7.619-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.61.61-1.524.61-2.133.305-.61-.61-.915-1.524-.305-2.134 2.438-3.047 3.352-6.095 3.047-8.228 0-1.524-.914-2.743-2.133-3.658-2.133-1.523-4.876-1.523-7.01 0-1.219.915-2.133 2.134-2.133 3.353-.305 2.438.914 5.18 3.048 8.228.61.915 1.524 1.829 1.219 2.743 0 1.22-.914 1.829-1.829 2.438 0 0-.304.305-.61.305-3.352 1.524-5.79 2.743-7.618 4.572-.305.61-.61 1.219-.61 1.828 0 .914.305 1.524.914 1.829.61.304 1.22.61 2.134.914 1.219.61 2.743.914 4.266.914h6.4c.915 0 1.524.61 1.524 1.524s-.61 1.524-1.524 1.524z" />
                        <path d="M38.4 62.476H25.905c-2.743 0-5.181-.305-7.315-1.219-1.523-.61-2.742-1.219-3.657-2.133-1.828-.914-2.743-3.048-2.743-5.181 0-1.829.61-3.353 1.829-4.876 2.438-2.743 6.4-4.877 11.886-6.705l.914-.914-.914-.915c-3.962-5.18-5.79-9.752-5.181-14.019.61-2.743 1.828-5.18 4.266-7.01 3.962-2.742 10.058-2.742 13.715 0 2.438 1.83 3.962 4.267 4.266 7.01.61 4.267-1.219 9.143-4.876 14.02-.914.914-.914 1.218-.914 1.218s.61.305.914.61c5.486 1.828 9.448 3.962 11.886 6.705 1.219 1.219 1.829 3.047 1.829 4.876 0 2.133-.915 4.267-2.439 5.486-.914.914-2.133 1.523-3.657 2.133-2.438.61-4.876.914-7.314.914zM32 20.114c-1.829 0-3.657.61-5.181 1.524-1.829 1.22-2.743 3.048-3.048 5.181-.304 3.352 1.22 7.314 4.267 11.581.914.914 1.829 1.829 1.524 3.352 0 1.22-1.22 2.134-2.133 3.048 0 0-.305.305-.61.305-5.18 1.524-8.533 3.657-10.971 6.095-.305.61-.61 1.829-.61 2.743 0 1.219.61 2.438 1.524 3.047.61.61 1.828 1.22 3.048 1.524 1.828.61 3.961.915 6.095.915H38.4c2.133 0 4.267-.305 6.095-.915 1.22-.304 2.134-.914 3.048-1.524.914-.609 1.524-1.828 1.524-3.047 0-.914-.305-2.133-1.22-2.743-2.133-2.438-5.79-4.267-10.97-6.095-.306 0-.306-.305-.61-.305-.915-.914-2.134-1.829-2.134-3.048s.915-2.438 1.829-3.352c3.048-3.962 4.571-8.229 4.267-11.581-.305-2.133-1.22-3.657-3.048-5.18-1.524-.915-3.352-1.525-5.181-1.525z" />
                      </g>
                    </svg>
                  </>
                </Link>
              </div>
            </div>

            <div class="main-content">
              <div class="large-banner">
                <h2>Covid</h2>
              </div>
              <div className="h-screen mt-10">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
