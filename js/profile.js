class Profile {
  async getProfile(username) {
    // let capitalizeUsername = await this.capitalize(username);
    // console.log(capitalizeUsername);
    const user = await (
      await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
      )
    ).json();
    let todos;
    if (user.length !== 0) {
      todos = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${user[0].id}`
        )
      ).json();
    }

    return {
      user,
      todos,
    };
  }

  async getUsers() {
    const usersData = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
    return {
      usersData,
    };
  }

  //   async capitalize(text) {
  //     const lower = text.toLowerCase();
  //     return text.charAt(0).toUpperCase() + lower.slice(1);
  //   }
}
