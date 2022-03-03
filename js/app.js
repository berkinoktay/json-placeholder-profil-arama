const profile = new Profile();
const ui = new UI();
const loading = document.querySelector('.loading');
const loading2 = document.querySelector('.loading2');
(async () => {
  await profile.getUsers().then((res) => {
    loading.style.display = 'none';
    ui.showUsers(res.usersData);
  });
})();

document
  .querySelector('#searchProfile')
  .addEventListener('input', async (e) => {
    const text = e.target.value;
    loading2.style.display = 'block';
    if (!!text.trim()) {
      profile
        .getProfile(text)
        .then((res) => {
          if (res.user.length === 0) {
            ui.clear();
            loading2.style.display = 'none';
            ui.showAlert(text);
          } else {
            ui.clear();
            loading2.style.display = 'none';
            ui.showUserInfo(res.user[0]);
            ui.showTasks(res.todos);
          }
        })
        .catch((err) => {
          ui.showAlert('İstek başarısız!');
        });
    } else {
      ui.clear();
      loading2.style.display = 'none';
    }
  });
