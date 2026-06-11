const button = document.getElementById("modoEscuro");
// carregar preferência
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️";
}
// clique
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    // trocar ícone
    button.textContent = isDark ? "☀️" : "🌙";
    // salvar
    button.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("dark-mode", isDark);
});
