function Login() {
      var done = 0;
      var usuario = document.getElementsByName('usuario')[0].value;
      var senha = document.getElementsByName('senha')[0].value;

      if (usuario == "admin" && senha == "admin") {
        window.top.close();
        window.open("pages/home.html");
        done = 1;
      }
      if (done == 0) {
        alert("Dados incorretos, tente novamente");
      }
}
