export default function hamburger() {
    const hamburgerMenu = document.querySelector("#hamburger");
    if (!hamburgerMenu) {
        throw new Error("Hamburger menu not found");
    }
    hamburgerMenu.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        if (!nav) {
            throw new Error("Nav element not found");
        }
        const navUL = document.querySelector("nav ul");
        if (!navUL) {
            throw new Error("Nav ul element not found");
        }
        const screenH = window.innerHeight;
        if (nav.style.display === "flex") {
            navUL.style.height = "0px";
            navUL.style.fontSize = "initial";
            setTimeout(() => {
                nav.style.display = "none";
            }, 480);
        }
        else {
            nav.style.display = "flex";
            setTimeout(() => {
                navUL.style.height = screenH + "px";
                navUL.style.fontSize = "2rem";
            });
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                nav.style.display = "flex";
                navUL.style.height = "initial";
                navUL.style.fontSize = "initial";
            }
            else {
                nav.style.display = "none";
                navUL.style.height = "0px";
                navUL.style.fontSize = "initial";
            }
        });
    });
}
