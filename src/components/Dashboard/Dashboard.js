import React from "react";
import "./dashboard.css";
import { Link, Outlet } from "react-router-dom";
import { AiTwotoneHome, AiOutlineAreaChart } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div class="dashboard-river mb-16 relative ">
      <div class="dashboard-container">
        <div class="dashboard">
          <div class="ui-row-1">
            <div class="logo-comp">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 128 128"
                  viewBox="0 0 128 128"
                >
                  <circle cx="64" cy="64" r="46.7" fill="#bde5ec" />
                  <circle cx="64" cy="64" r="35" fill="#f7f7eb" />
                  <path
                    fill="#e44450"
                    d="M67.7 3.1c1.4.5 1.9 1 2 1.5 0 .5-.2 1-.8 1.5-.5.5-1.2 1-1.5 1.5C67 8 67 8.5 66.9 9c-.4 2-.7 4-1 5.9-.3 2-.5 4-.6 5.9-.1 2-.2 4 0 5.9.1.7-.5 1.3-1.2 1.4-.7.1-1.3-.5-1.4-1.2 0-.1 0-.1 0-.2.1-2 .1-4 0-5.9-.1-2-.3-4-.6-5.9-.3-2-.6-4-1-5.9-.1-.5-.1-1-.5-1.5-.4-.5-1-1-1.5-1.5-.5-.5-.8-1-.8-1.5.1-.5.6-1 2-1.5C62.9 2.3 65.4 2.3 67.7 3.1zM123.9 67.7c-.5 1.4-1 1.9-1.5 2-.5 0-1-.2-1.5-.8-.5-.5-1-1.2-1.5-1.5-.5-.4-1-.4-1.5-.5-2-.4-4-.7-5.9-1-2-.3-4-.5-5.9-.6-2-.1-4-.2-5.9 0-.7.1-1.3-.5-1.4-1.2-.1-.7.5-1.3 1.2-1.4.1 0 .1 0 .2 0 2 .1 4 .1 5.9 0 2-.1 4-.3 5.9-.6 2-.3 4-.6 5.9-1 .5-.1 1-.1 1.5-.5.5-.4 1-1 1.5-1.5.5-.5 1-.8 1.5-.8.5.1 1 .6 1.5 2C124.7 62.9 124.7 65.4 123.9 67.7zM59.3 123.9c-1.4-.5-1.9-1-2-1.5 0-.5.2-1 .8-1.5.5-.5 1.2-1 1.5-1.5.4-.5.4-1 .5-1.5.4-2 .7-4 1-5.9.3-2 .5-4 .6-5.9.1-2 .2-4 0-5.9-.1-.7.5-1.3 1.2-1.4.7-.1 1.3.5 1.4 1.2 0 .1 0 .1 0 .2-.1 2-.1 4 0 5.9.1 2 .3 4 .6 5.9.3 2 .6 4 1 5.9.1.5.1 1 .5 1.5.4.5 1 1 1.5 1.5.5.5.8 1 .8 1.5-.1.5-.6 1-2 1.5C64.1 124.7 61.6 124.7 59.3 123.9zM3.1 59.3c.5-1.4 1-1.9 1.5-2 .5 0 1 .2 1.5.8.5.5 1 1.2 1.5 1.5C8 60 8.5 60 9 60.1c2 .4 4 .7 5.9 1 2 .3 4 .5 5.9.6 2 .1 4 .2 5.9 0 .7-.1 1.3.5 1.4 1.2.1.7-.5 1.3-1.2 1.4-.1 0-.1 0-.2 0-2-.1-4-.1-5.9 0-2 .1-4 .3-5.9.6-2 .3-4 .6-5.9 1-.5.1-1 .1-1.5.5-.5.4-1 1-1.5 1.5-.5.5-1 .8-1.5.8-.5-.1-1-.6-1.5-2C2.3 64.1 2.3 61.6 3.1 59.3zM36.9 9.1c1.5-.3 2.2-.1 2.5.3.3.4.3 1 .1 1.7-.2.7-.5 1.4-.6 2.1-.1.6.2 1 .3 1.5.7 1.9 1.4 3.8 2.1 5.6.8 1.8 1.6 3.7 2.5 5.4.9 1.8 1.8 3.5 3 5.1.4.6.2 1.4-.3 1.8-.6.4-1.4.2-1.8-.3 0-.1-.1-.1-.1-.2-.9-1.8-1.9-3.5-3-5.1-1.1-1.7-2.2-3.3-3.5-4.8-1.2-1.6-2.5-3.1-3.8-4.7-.3-.4-.6-.8-1.2-1-.6-.2-1.4-.3-2.1-.5-.7-.2-1.2-.5-1.4-.9-.2-.5 0-1.1 1-2.3C32.3 10.8 34.6 9.6 36.9 9.1zM117.9 36.9c.3 1.5.1 2.2-.3 2.5-.4.3-1 .3-1.7.1-.7-.2-1.4-.5-2.1-.6-.6-.1-1 .2-1.5.3-1.9.7-3.8 1.4-5.6 2.1-1.8.8-3.7 1.6-5.4 2.5-1.8.9-3.5 1.8-5.1 3-.6.4-1.4.2-1.8-.3-.4-.6-.2-1.4.3-1.8.1 0 .1-.1.2-.1 1.8-.9 3.5-1.9 5.1-3 1.7-1.1 3.3-2.2 4.8-3.5 1.6-1.2 3.1-2.5 4.7-3.8.4-.3.8-.6 1-1.2.2-.6.3-1.4.5-2.1.2-.7.5-1.2.9-1.4.5-.2 1.1 0 2.3 1C116.2 32.3 117.4 34.6 117.9 36.9zM90.1 117.9c-1.5.3-2.2.1-2.5-.3-.3-.4-.3-1-.1-1.7.2-.7.5-1.4.6-2.1.1-.6-.2-1-.3-1.5-.7-1.9-1.4-3.8-2.1-5.6-.8-1.8-1.6-3.7-2.5-5.4-.9-1.8-1.8-3.5-3-5.1-.4-.6-.2-1.4.3-1.8s1.4-.2 1.8.3c0 .1.1.1.1.2.9 1.8 1.9 3.5 3 5.1 1.1 1.7 2.2 3.3 3.5 4.8 1.2 1.6 2.5 3.1 3.8 4.7.3.4.6.8 1.2 1 .6.2 1.4.3 2.1.5.7.2 1.2.5 1.4.9.2.5 0 1.1-1 2.3C94.7 116.2 92.4 117.4 90.1 117.9zM9.1 90.1c-.3-1.5-.1-2.2.3-2.5.4-.3 1-.3 1.7-.1.7.2 1.4.5 2.1.6.6.1 1-.2 1.5-.3 1.9-.7 3.8-1.4 5.6-2.1 1.8-.8 3.7-1.6 5.4-2.5 1.8-.9 3.5-1.8 5.1-3 .6-.4 1.4-.2 1.8.3s.2 1.4-.3 1.8c-.1 0-.1.1-.2.1-1.8.9-3.5 1.9-5.1 3-1.7 1.1-3.3 2.2-4.8 3.5-1.6 1.2-3.1 2.5-4.7 3.8-.4.3-.8.6-1 1.2-.2.6-.3 1.4-.5 2.1-.2.7-.5 1.2-.9 1.4-.5.2-1.1 0-2.3-1C10.8 94.7 9.6 92.4 9.1 90.1zM13.3 29.7c1.1-1 1.8-1.2 2.3-1 .5.2.7.7.9 1.4.2.7.3 1.5.5 2.1.2.6.7.8 1 1.2 1.5 1.3 3.1 2.6 4.7 3.8 1.6 1.2 3.2 2.4 4.8 3.5 1.7 1.1 3.3 2.1 5.1 3 .6.3.9 1.1.6 1.7-.3.6-1.1.9-1.7.6-.1 0-.1-.1-.2-.1-1.6-1.1-3.4-2.1-5.1-3-1.8-.9-3.6-1.7-5.4-2.5-1.8-.8-3.7-1.5-5.6-2.1-.5-.2-.9-.4-1.5-.3-.6.1-1.4.4-2.1.6-.7.2-1.3.2-1.7-.1-.4-.3-.6-1-.3-2.5C10.2 33.4 11.5 31.2 13.3 29.7zM97.3 13.3c1 1.1 1.2 1.8 1 2.3-.2.5-.7.7-1.4.9-.7.2-1.5.3-2.1.5-.6.2-.8.7-1.2 1-1.3 1.5-2.6 3.1-3.8 4.7-1.2 1.6-2.4 3.2-3.5 4.8-1.1 1.7-2.1 3.3-3 5.1-.3.6-1.1.9-1.7.6-.6-.3-.9-1.1-.6-1.7 0-.1.1-.1.1-.2 1.1-1.6 2.1-3.4 3-5.1.9-1.8 1.7-3.6 2.5-5.4.8-1.8 1.5-3.7 2.1-5.6.2-.5.4-.9.3-1.5-.1-.6-.4-1.4-.6-2.1-.2-.7-.2-1.3.1-1.7.3-.4 1-.6 2.5-.3C93.6 10.2 95.8 11.5 97.3 13.3zM113.7 97.3c-1.1 1-1.8 1.2-2.3 1-.5-.2-.7-.7-.9-1.4-.2-.7-.3-1.5-.5-2.1-.2-.6-.7-.8-1-1.2-1.5-1.3-3.1-2.6-4.7-3.8-1.6-1.2-3.2-2.4-4.8-3.5-1.7-1.1-3.3-2.1-5.1-3-.6-.3-.9-1.1-.6-1.7s1.1-.9 1.7-.6c.1 0 .1.1.2.1 1.6 1.1 3.4 2.1 5.1 3 1.8.9 3.6 1.7 5.4 2.5 1.8.8 3.7 1.5 5.6 2.1.5.2.9.4 1.5.3.6-.1 1.4-.4 2.1-.6.7-.2 1.3-.2 1.7.1.4.3.6 1 .3 2.5C116.8 93.6 115.5 95.8 113.7 97.3zM29.7 113.7c-1-1.1-1.2-1.8-1-2.3.2-.5.7-.7 1.4-.9.7-.2 1.5-.3 2.1-.5.6-.2.8-.7 1.2-1 1.3-1.5 2.6-3.1 3.8-4.7 1.2-1.6 2.4-3.2 3.5-4.8 1.1-1.7 2.1-3.3 3-5.1.3-.6 1.1-.9 1.7-.6s.9 1.1.6 1.7c0 .1-.1.1-.1.2-1.1 1.6-2.1 3.4-3 5.1-.9 1.8-1.7 3.6-2.5 5.4-.8 1.8-1.5 3.7-2.1 5.6-.2.5-.4.9-.3 1.5.1.6.4 1.4.6 2.1.2.7.2 1.3-.1 1.7-.3.4-1 .6-2.5.3C33.4 116.8 31.2 115.5 29.7 113.7z"
                  />
                  <path
                    fill="#2652e4"
                    d="M71.8 28.5c.5-.9.9-1.9 1.2-2.8.3-1 .5-1.9.7-2.9.1-1 .1-2.1 0-3.1 0-.5 0-1 .1-1.5.1-.5 0-1 .9-1.3 1.2-.3 2.5 0 3.3.9.7.7.3 1.1.2 1.6-.2.5-.4.9-.7 1.4-.5.9-1.1 1.8-1.5 2.7-.4.9-.6 1.9-.9 2.9-.2 1-.4 2-.3 3 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6C71.5 29.1 71.6 28.8 71.8 28.5zM55.3 99.3c-.6.9-.9 1.8-1.3 2.8-.3 1-.6 1.9-.8 2.9-.2 1-.1 2.1-.1 3.1 0 .5 0 1-.1 1.5-.1.5 0 1-1 1.3-1.2.3-2.5-.1-3.3-1-.7-.7-.3-1.1-.1-1.6.2-.5.5-.9.7-1.4.6-.9 1.2-1.8 1.6-2.7.4-.9.7-1.9.9-2.9.2-1 .4-2 .4-3 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6C55.5 98.8 55.4 99.1 55.3 99.3zM98.7 72.2c.9.5 1.9.9 2.8 1.2 1 .3 1.9.5 2.9.7 1 .1 2.1.1 3.1 0 .5 0 1 0 1.5.1.5.1 1 0 1.3.9.3 1.2 0 2.5-.9 3.3-.7.7-1.1.3-1.6.2-.5-.2-.9-.4-1.4-.7-.9-.5-1.8-1.1-2.7-1.5-.9-.4-1.9-.6-2.9-.9-1-.2-2-.4-3-.3-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6C98.2 72 98.5 72.1 98.7 72.2zM28 55.8c-.9-.6-1.8-.9-2.8-1.3-1-.3-1.9-.6-2.9-.8-1-.2-2.1-.1-3.1-.1-.5 0-1 0-1.5-.1-.5-.1-1 0-1.3-1-.3-1.2.1-2.5 1-3.3.7-.7 1.1-.3 1.6-.1.5.2.9.5 1.4.7.9.6 1.8 1.2 2.7 1.6.9.4 1.9.7 2.9.9 1 .2 2 .4 3 .4.9 0 1.6.7 1.6 1.6S29.7 56 28.8 56C28.5 56 28.2 55.9 28 55.8zM98.2 53.4c1 0 2-.2 3-.4 1-.2 1.9-.5 2.9-.9.9-.4 1.8-1 2.7-1.5.4-.3.9-.5 1.4-.7.5-.2.9-.5 1.6.2.9.9 1.2 2.2.9 3.3-.3 1-.8.9-1.3 1-.5.1-1 .1-1.5.1-1 0-2.1-.1-3.1.1-1 .2-2 .4-2.9.7-1 .3-1.9.7-2.8 1.2-.8.5-1.7.2-2.2-.5-.5-.8-.2-1.7.5-2.2C97.6 53.5 97.9 53.4 98.2 53.4zM28.7 74.6c-1 0-2.1.1-3 .3-1 .2-2 .5-2.9.8-1 .3-1.8.9-2.8 1.4-.5.3-.9.5-1.4.7-.5.2-.9.5-1.6-.2-.9-.9-1.1-2.2-.8-3.3.3-1 .8-.8 1.3-.9.5-.1 1-.1 1.5 0 1 0 2.1.1 3.1 0 1-.1 2-.3 3-.6 1-.3 1.9-.6 2.8-1.1.8-.4 1.7-.2 2.2.6.4.8.2 1.7-.6 2.2C29.2 74.5 28.9 74.6 28.7 74.6zM73.8 98.6c0 1 .2 2 .4 3 .2 1 .5 1.9.9 2.9.4.9 1 1.8 1.5 2.7.3.4.5.9.7 1.4.2.5.5.9-.2 1.6-.9.9-2.2 1.2-3.3.9-1-.3-.9-.8-1-1.3-.1-.5-.1-1-.1-1.5 0-1 .1-2.1-.1-3.1-.2-1-.4-2-.7-2.9-.3-1-.7-1.9-1.2-2.8-.5-.8-.2-1.7.5-2.2s1.7-.2 2.2.5C73.8 98.1 73.8 98.3 73.8 98.6zM52.7 29.1c0-1-.1-2.1-.3-3-.2-1-.5-2-.8-2.9-.3-1-.9-1.8-1.4-2.8-.3-.5-.5-.9-.7-1.4-.2-.5-.5-.9.2-1.6.9-.9 2.2-1.1 3.3-.8 1 .3.8.8.9 1.3.1.5.1 1 0 1.5 0 1-.1 2.1 0 3.1.1 1 .3 2 .6 3 .3 1 .6 1.9 1.1 2.8.4.8.2 1.7-.6 2.2-.8.4-1.7.2-2.2-.6C52.7 29.7 52.7 29.4 52.7 29.1zM88.3 37.4c.9-.5 1.7-1.2 2.4-1.8.7-.7 1.4-1.4 2.1-2.2.6-.8 1.1-1.8 1.6-2.7.3-.5.5-.9.8-1.3.3-.4.5-.9 1.5-.7 1.2.3 2.1 1.3 2.4 2.4.3 1-.3 1.2-.7 1.5-.4.3-.8.6-1.3.8-.9.5-1.9 1-2.7 1.6-.8.6-1.5 1.3-2.2 2.1-.7.8-1.3 1.5-1.8 2.5-.4.8-1.4 1-2.2.6-.8-.4-1-1.4-.6-2.2C87.8 37.8 88.1 37.6 88.3 37.4zM38.7 90.5c-.9.5-1.7 1.1-2.5 1.8-.8.7-1.5 1.4-2.1 2.2-.7.8-1.1 1.7-1.7 2.6-.3.4-.5.9-.9 1.3C31.2 98.7 31 99.2 30 99c-1.2-.3-2.1-1.3-2.4-2.5-.2-1 .3-1.1.7-1.5.4-.3.9-.6 1.3-.8.9-.5 1.9-.9 2.7-1.5.8-.6 1.5-1.3 2.3-2 .7-.7 1.4-1.5 1.9-2.4.4-.8 1.4-1 2.2-.6.8.4 1 1.4.6 2.2C39.1 90.2 38.9 90.4 38.7 90.5zM89.8 88.8c.5.9 1.2 1.7 1.8 2.4.7.7 1.4 1.4 2.2 2.1.8.6 1.8 1.1 2.7 1.6.5.3.9.5 1.3.8.4.3.9.5.7 1.5-.3 1.2-1.3 2.1-2.4 2.4-1 .3-1.2-.3-1.5-.7-.3-.4-.6-.8-.8-1.3-.5-.9-1-1.9-1.6-2.7-.6-.8-1.3-1.5-2.1-2.2-.8-.7-1.5-1.3-2.5-1.8-.8-.4-1-1.4-.6-2.2.4-.8 1.4-1 2.2-.6C89.5 88.3 89.7 88.5 89.8 88.8zM36.8 39.1c-.5-.9-1.1-1.7-1.8-2.5-.7-.8-1.4-1.5-2.2-2.1-.8-.7-1.7-1.1-2.6-1.7-.4-.3-.9-.5-1.3-.9-.4-.3-.9-.5-.6-1.5.3-1.2 1.3-2.1 2.5-2.4 1-.2 1.1.3 1.5.7.3.4.6.9.8 1.3.5.9.9 1.9 1.5 2.7.6.8 1.3 1.5 2 2.3.7.7 1.5 1.4 2.4 1.9.8.4 1 1.4.6 2.2-.4.8-1.4 1-2.2.6C37.1 39.6 36.9 39.4 36.8 39.1z"
                  />
                  <path
                    fill="none"
                    stroke="#ecc6c3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M65.7,91.8c1.2-2.8,2-5.8,2.5-8.7c0.4-3,0.4-5.8,0-8.7c-0.1-0.7,0-1.1,0.2-1.2c0.2-0.1,0.6,0.1,1.1,0.7     c1.4,1.8,3.1,3.4,4.9,4.9c1.8,1.5,3.9,2.7,6.1,3.8c1.4,0.7,2.8-0.5,2.1-2c-0.9-2.3-2.1-4.4-3.4-6.3c-0.7-1-1.4-1.9-2.1-2.8     c-0.8-0.9-1.6-1.7-2.4-2.5c-1-1-0.8-1.5,0.6-1.2c2.3,0.5,4.5,0.7,6.9,0.7c2.3-0.1,4.8-0.3,7.1-0.9c1.5-0.4,1.8-2.2,0.4-2.9     c-2.2-1.2-4.4-2-6.7-2.7c-1.1-0.3-2.3-0.6-3.4-0.8c-1.2-0.2-2.3-0.3-3.5-0.4c-1.4-0.1-1.6-0.7-0.3-1.4c2.1-1.1,3.9-2.4,5.8-3.9     c1.8-1.5,3.4-3.3,4.9-5.3c0.9-1.2,0-2.8-1.6-2.5c-2.4,0.5-4.7,1.2-6.9,2.2c-2.1,0.9-4.2,2.1-6,3.5c-1.2,0.8-1.7,0.5-1.1-0.9     c0.9-2.1,1.5-4.3,1.9-6.7c0.4-2.3,0.6-4.8,0.4-7.2c0-0.8-0.5-1.3-1-1.5c-0.6-0.2-1.2,0-1.7,0.6c-0.8,1-1.5,1.9-2.1,2.9     c-0.7,1-1.2,2.1-1.8,3.1c-1,2.1-1.8,4.3-2.4,6.5c-0.4,1.4-1,1.5-1.4,0c-0.7-2.2-1.6-4.3-2.8-6.4c-1.2-2-2.6-4-4.2-5.8     c-1-1.2-2.8-0.6-2.7,1.1c0,1.2,0.1,2.4,0.2,3.6c0.1,1.2,0.4,2.4,0.6,3.5c0.5,2.3,1.3,4.5,2.3,6.5c0.6,1.3,0.2,1.8-1.1,0.9     c-1.9-1.2-4-2.3-6.2-3.1c-2.2-0.8-4.6-1.5-7-1.8c-0.8-0.1-1.4,0.2-1.7,0.7c-0.3,0.5-0.2,1.2,0.3,1.8c3.1,3.7,7,6.6,11.2,8.5     c1.3,0.6,1.3,1.2-0.2,1.4c-2.2,0.3-4.5,0.8-6.8,1.5c-2.2,0.8-4.4,1.8-6.5,3.1c-0.7,0.4-0.9,1.1-0.8,1.6c0.1,0.6,0.6,1.1,1.4,1.2     c4.8,0.9,9.6,0.6,14.1-0.6c0.7-0.2,1.2-0.2,1.3,0.1c0.1,0.2,0,0.6-0.6,1.1c-4,4.1-6.9,9.4-8.3,15.5"
                  />
                </svg>
              </div>
              <p>Covid-19</p>
            </div>

            <div class="search">
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search for Covid-19 info ..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <div class="ui-row-2">
            <div class="left-sidebar">
              <div>
                <Link to="/dashboard">
                  <AiTwotoneHome className="icon-2"></AiTwotoneHome>
                </Link>
              </div>
              <div>
                <Link to="/dashboard/chart">
                  <AiOutlineAreaChart className="icon-2 "></AiOutlineAreaChart>
                </Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-bar-chart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-tags-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                </svg>
              </div>
            </div>

            <div class="main-content">
              <div class="header">
                <div class="page-display ">
                  <h1 className="text-white">Home</h1>
                  <h2>Explore The Information</h2>
                </div>
              </div>

              <div class="large-banner">
                <h2>Covid</h2>
                {/* <a href="javascript:void(0);" title="Explore">
                  
                  Take a Look{" "}
                </a> */}
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