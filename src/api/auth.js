import React from "react";
const cohort = "2211-FTB-ET-WEB-FT";
const APIURL = "https://strangers-things.herokuapp.com/api/";

export const fetchPosts = async () => {
  const APIURL = "https://strangers-things.herokuapp.com/api/";
  const cohort = "2211-FTB-ET-WEB-FT";
  const response = await fetch(`${APIURL}${cohort}/posts/`);
  const posts = await response.json();
  return posts;
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    const {
      data: { token },
    } = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async (token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

