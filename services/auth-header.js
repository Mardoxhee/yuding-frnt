export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (user) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user}`,
    };
  } else "no valid token";
}
