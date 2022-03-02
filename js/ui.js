class UI {
  constructor() {
    this.usersContainer = document.querySelector('.usersContainer');
    this.userInfoContainer = document.querySelector('.userInfoContainer');
    this.alertContainer = document.querySelector('.alertContainer');
    this.taskList = document.querySelector('.taskList');
  }
  showUserInfo(user) {
    this.userInfoContainer.innerHTML = `
    <li class="list-group-item">Kullanıcı Adı: ${user.username}</li>
    <li class="list-group-item">İsmi: ${user.name}</li>
    <li class="list-group-item">E-Posta Adresi: ${user.email}</li>
    <li class="list-group-item">Telefon Numarası: ${user.phone}</li>
    <li class="list-group-item">İnternet Sitesi: ${user.website}</li>
    <li class="list-group-item bg-black text-white text-center">ADRES</li>
    <li class="list-group-item">Sokak: ${user.address.street}</li>
    <li class="list-group-item">Bina: ${user.address.suite}</li>
    <li class="list-group-item">Şehir: ${user.address.city}</li>
    <li class="list-group-item">Zip Kodu: ${user.address.zipcode}</li>
    `;
  }
  showUsers(data) {
    data.map((user) => {
      this.usersContainer.innerHTML += `
        <li class="list-group-item">${user.username}</li>
        `;
    });
  }
  showTasks(data) {
    data.forEach((todo) => {
      if (todo.completed) {
        this.taskList.innerHTML += `
            <li class="list-group-item bg-success">${todo.title} <span class="text-white">BİTTİ!</span></li>
            `;
      } else {
        this.taskList.innerHTML += `
            <li class="list-group-item">${todo.title}</li>
            `;
      }
    });
  }
  showAlert(text) {
    this.alertContainer.innerHTML = `
    <div class="alert alert-danger p-2" role="alert">
    ${text} kullanıcısı bulunamadı!
    </div>
    `;
  }

  clear() {
    this.userInfoContainer.innerHTML = '';
    this.alertContainer.innerHTML = '';
    this.taskList.innerHTML = '';
  }
}
