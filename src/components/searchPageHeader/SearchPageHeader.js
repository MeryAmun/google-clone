import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Menu, Button, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const SearchPageHeader = ({ searchTerm }) => {
  const [active, setActive] = useState("All");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="searchPageHeader">
      <div className="searchPageHeader__headerLinks">
        <div className="searchPageHeader__linksLeft">
          <div
            className={`searchPageHeader__link ${
              active === "All"
                ? "searchPageHeader__linkActive"
                : "searchPageHeader__link"
            }`}
            onClick={() => setActive("All")}
          >
            {active === "All" ? (
              <svg focusable="false" viewBox="0 0 24 24">
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
            ) : (
              <svg focusable="false" viewBox="0 0 24 24">
                <path fill="#969BA1" d="M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6"></path>
              </svg>
            )}

            <Link
              to={`https://www.google.com/search?q=${searchTerm}&hl=en&tbm=nws&source=lnms&sa=X&ved=2ahUKEwiM-8DJ08z9AhUeh_0HHcWvBE4Q_AUoA3oECAsQBQ&biw=810&bih=657&dpr=1`}
              className={` ${
                active === "All" ? "searchPageHeader__textActive" : ""
              }`}
            >
              All
            </Link>
          </div>
          <div
            className={`searchPageHeader__link ${
              active === "Images"
                ? " searchPageHeader__linkActive searchPageHeader__textActive"
                : "searchPageHeader__link"
            }`}
            onClick={() => setActive("Images")}
          >
            {active === "Images" ? (
              <svg
                className="DCxYpf"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#4285F4"
                  d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#EA4335"
                  d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#34A853"
                  d="M14 13l-2.25 2.75L10 14l-4 4h12z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#FBBC04"
                  d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"
                ></path>
              </svg>
            ) : (
              <svg focusable="false" viewBox="0 0 24 24">
                <path fill="#969BA1" d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
              </svg>
            )}

            <Link
              to={`https://www.google.com/search?q=${searchTerm}&hl=en&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiBmLvt08z9AhWdi_0HHXL_APUQ_AUoAXoECAIQAw&biw=810&bih=657&dpr=1`}
            >
              Images
            </Link>
          </div>
          <div
            className={`searchPageHeader__link ${
              active === "Videos"
                ? " searchPageHeader__linkActive searchPageHeader__textActive"
                : "searchPageHeader__link"
            }`}
            onClick={() => setActive("Videos")}
          >
            {active === "Videos" ? (
              <svg focusable="false" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M10 16.5l6-4.5-6-4.5"></path>
                <path
                  fill="#ea4335"
                  d="M20 12h2v7.5a2.5 2.5 0 0 1-2.5 2.5H12v-2h7a1 1 0 0 0 1-1v-7"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M20 12V5a1 1 0 0 0-1-1h-7V2h7.6A2.4 2.4 0 0 1 22 4.4V12h-2"
                ></path>
                <path
                  fill="#34a853"
                  d="M12 20v2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2H12v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"
                ></path>
              </svg>
            ) : (
              <svg
                className="DCxYpf"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path clip-rule="evenodd"  fill="#969BA1"></path>
                <path
                fill="#969BA1"
                  clip-rule="evenodd"
                  d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            )}

            <Link
              to={`https://www.google.com/search?q=${searchTerm}&source=lmns&tbm=vid&bih=657&biw=810&hl=en&sa=X&ved=2ahUKEwif_vGn4cz9AhWpoP0HHZbGD10Q_AUoAnoECAEQAg`}
            >
              Videos
            </Link>
          </div>
          <div
            className={`searchPageHeader__link ${
              active === "News"
                ? " searchPageHeader__linkActive searchPageHeader__textActive"
                : "searchPageHeader__link"
            }`}
            onClick={() => setActive("News")}
          >
            {active === "News" ? (
              <svg focusable="false" viewBox="0 0 24 24">
                <path
                  fill="#34a853"
                  d="M22 12h-2v6.22c-.07.48-.51.82-1 .78h-7v2h7c1.59.05 2.92-1.17 3-2.76V12"
                ></path>
                <path
                  fill="#4285f4"
                  d="M19 3h-7v2h7c.49-.04.92.3 1 .78V12h2V5.76A2.93 2.93 0 0 0 19 3"
                ></path>
                <path
                  fill="#ea4335"
                  d="M12 3H5a2.93 2.93 0 0 0-3 2.76V12h2V5.78A.94.94 0 0 1 5 5h7V3"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 12H2v6.24A2.916 2.916 0 0 0 5 21h7v-2H5c-.49.04-.92-.3-1-.78L4.01 12"
                ></path>
                <path
                  fill="#4285f4"
                  d="M10 7H6v6h4V7m8 4h-6v2h6v-2m0 4H6v2h12v-2m0-8h-6v2h6V7"
                ></path>
              </svg>
            ) : (
              <svg focusable="false" viewBox="0 0 24 24">
                <path fill="#969BA1" d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
              </svg>
            )}

            <Link
              to={`https://www.google.com/search?q=${searchTerm}&hl=en&tbm=nws&source=lnms&sa=X&ved=2ahUKEwiko-_N4cz9AhUrhf0HHcAWDewQ_AUoA3oECAoQBQ&biw=810&bih=657&dpr=1`}
            >
              News
            </Link>
          </div>
          <div
            className={`searchPageHeader__link ${
              active === "Books"
                ? " searchPageHeader__linkActive searchPageHeader__textActive"
                : ""
            }`}
            onClick={() => setActive("Books")}
          >
            {active === "Books" ? (
              <svg focusable="false" viewBox="0 0 24 24" color="#969BA1">
                <path
                  fill="#fbbc04"
                  d="M6 20v-8H4v8c0 1.1.9 2 2 2h6v-2H6"
                ></path>
                <path
                  fill="#34a853"
                  d="M18 20h-6v2h6a2 2 0 0 0 2-2v-8h-2v8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M18 2h-5v2h5v8h2V4a2 2 0 0 0-2-2"
                ></path>
                <path
                  fill="#4285f4"
                  d="M6 2a2 2 0 0 0-2 2v8h2V4h2v8l2.5-1.5L13 12V2H6"
                ></path>
              </svg>
            ) : (
              <svg focusable="false" viewBox="0 0 24 24"><path  fill="#969BA1" d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"></path></svg>
            )}

            <Link
              to={`https://www.google.com/search?q=${searchTerm}&hl=en&tbm=bks&source=lnms&sa=X&ved=2ahUKEwjTi-Xw4cz9AhXlhf0HHTHTBgAQ_AUoAXoECAEQCg&biw=810&bih=657&dpr=1`}
              className="searchPageHeader__textActive "
            >
              Books
            </Link>
          </div>
          <div className="searchPageHeader__moreMenu">
            {/* <span onClick={() => setOpenMenu(true)}>More</span> */}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
                More
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                      sx: {
                        backgroundColor: "#292a2d",
                        color: "red"
                      }
                    }
                  }
              >
                <MenuItem onClick={handleClose} 
                className="searchPageHeader__moreMenuItem">
                <Link to={`https://www.google.com/maps/search/${searchTerm}/@4.0690441,9.6992774,13z/data=!3m1!4b1?hl=en`}>
                <svg focusable="false" viewBox="0 0 16 16"><path  fill="#969BA1" d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path></svg>
                Maps
                </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="searchPageHeader__moreMenuItem">
                <Link to={`https://www.google.com/maps/search/${searchTerm}/@4.0690441,9.6992774,13z/data=!3m1!4b1?hl=en`}>
                <svg focusable="false" viewBox="0 0 24 24"><path  fill="#969BA1" d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"></path></svg>
                Books
                </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="searchPageHeader__moreMenuItem">
                <Link to={`https://www.google.com/finance/?sa=X&ved=2ahUKEwiGh-Pbt879AhW5_7sIHX1DDW0Q_AUoAXoECAEQCw`}>
                <svg focusable="false" viewBox="0 0 24 24"><path fill="#969BA1" d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83"></path></svg>
                Finance
                </Link>
                </MenuItem>
                
              </Menu>
            </div>
        </div>
        <div className="searchPageHeader__headerLinksRight"></div>
      </div>
    </div>
  );
};

export default SearchPageHeader;
