const profile = new Profile();
const ui = new UI();

(async () => {
  await profile.getUsers().then((res) => {
    ui.showUsers(res.usersData);
  });
})();

document
  .querySelector('#searchProfile')
  .addEventListener('input', async (e) => {
    const text = e.target.value;
    if (!!text.trim()) {
      profile
        .getProfile(text)
        .then((res) => {
          if (res.user.length === 0) {
            ui.clear();
            ui.showAlert(text);
          } else {
            ui.clear();
            ui.showUserInfo(res.user[0]);
            ui.showTasks(res.todos);
          }
        })
        .catch((err) => {
          ui.showAlert('İstek başarısız!');
        });
    } else {
      ui.clear();
    }
  });
