import React from "react";
const cohort = "2211-FTB-ET-WEB-FT";
const APIURL = "https://strangers-things.herokuapp.com/api/";

export const fetchPosts = async () => {
  const token = localStorage.getItem("token"); // Add token
  const response = await fetch(`${APIURL}${cohort}/posts/`, {
    // Add token to request
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const posts = await response.json();
  console.log(posts);
  return posts;
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/register`,
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
    const { data } = await response.json();
    console.log(data.token);
    return data.token;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/login`,
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
    const { data } = await response.json();
    console.log(data.token);
    return data.token;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async () => {
  const token = localStorage.getItem("token");
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
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};
export const deletePost = async (id, { setPosts, posts }) => {
  try {
    const token = localStorage.getItem("token"); // Add token
    const response = await fetch(`${APIURL}${cohort}/posts/${id}`, {
      // Add token to request
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    // Remove post from the page and array that is holding all posts
    // in state
    setPosts(posts.filter((post) => post._id !== id));
  } catch (error) {
    console.error(error);
  }
};

// export const createPost = async (
//   e,
//   setPosts,
//   token,
//   title,
//   description,
//   price,
//   willDeliver
// ) => {
//   e.preventDefault();
//   try {
//     const response = await fetch(
//       `https://strangers-things.herokuapp.com/api/${cohort}/posts`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           post: {
//             title: title,
//             description: description,
//             price: price,
//             willDeliver: willDeliver,
//           },
//         }),
//       }
//     );
//     setPosts = await response.json();
//     const result = setPosts([...posts, result]);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };
