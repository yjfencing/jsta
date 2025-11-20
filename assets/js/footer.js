document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        });
});
