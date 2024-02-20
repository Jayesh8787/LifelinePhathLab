import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Services from "../Services/Services";
import Cookies from "js-cookie";

export default function SearchBar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const fetchTestNames = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8083/api/tests/all/"
        );
        console.log(response);
        // Assuming the API returns an array of objects with a 'name' property representing the test name
        const names = response.data.map((item) => item.testName);
        setFilteredOptions(names);
      } catch (error) {
        console.error("Error fetching test names:", error);
      }
    };

    fetchTestNames();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
  };

  const filterOptions = () => {
    return filteredOptions.filter((option) =>
      option.toLowerCase().includes(inputValue)
    );
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
  };

  const handleSubmit = () => {
    navigate("/testDetails/" + inputValue);
  };

  const isLoggedIn = Cookies.get("isLoggedIn");

  const handleLogout = () => {
    // Clear all cookies
    Cookies.remove("jwtToken");
    Cookies.remove("username");
    Cookies.remove("firstName");
    Cookies.remove("userId");
    Cookies.remove("role");
    Cookies.remove("isLoggedIn");
    // Dispatch logout action

    window.location.reload();
  };
  return (
    <div className="container-fluid bg-white">
      <div className="search-field">
        <div className="search-items">
          <div className="input-icons ">
            {/* <i className="icofont-search" /> */}
            <div className="container">
              <input
                type="text"
                className="form-control"
                placeholder="Search Test"
                value={inputValue}
                onChange={handleInputChange}
              />
              {inputValue && (
                <div className="dropdown-menu show">
                  {filterOptions().map((option, index) => (
                    <a
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="search-btn pt-2">
            <Link to={"/testDetails/" + inputValue} className="btn btn-primary">
              Search
            </Link>
          </div>
        </div>
        <div className="cart-sign">
          <Link to="/cart">
            <div className="cart">
              <i className="icofont-cart" />
              <div className="secondary-text">cart</div>
            </div>
          </Link>

          <div className="cart">
            {isLoggedIn ? (
              <>
                <i className="icofont-user" />

                <div className="secondary-text">
                  <div class="dropdown">
                    <div
                      class="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {Cookies.get("firstName")}
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <button class="dropdown-item" type="button">
                          Prfile
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item text-danger"
                          type="button"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">
                <i className="icofont-user" />
                <div className="secondary-text">Sign in</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
