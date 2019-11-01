export default {
  getUsers: () => {
    return fetch("/user")
      .then(res => res.json())
      .catch(data => data);
  }
}