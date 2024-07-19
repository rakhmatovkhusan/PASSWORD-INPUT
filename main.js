const passwordInput = document.querySelector("form input")
const eyeIcon = document.querySelector("form i")
const requirementList = document.querySelectorAll(".requirement-list li")

const requirements = [
    {regax: /.{8,}/, index: 0},
    {regax: /[0-9]/, index: 1},
    {regax: /[a-z]/, index: 2},
    {regax: /[A-Z]/, index: 3},
    {regax: /[^A-Za-za0-9]/, index: 4},
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item.regax.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    })
})

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;

})