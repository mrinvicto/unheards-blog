// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// export const onClientEntry = () => {
//   const registerNavbarToggle = () => {
//     document.addEventListener("DOMContentLoaded", () => {
//       // Get all "navbar-burger" elements
//       debugger

//       const $navbarBurgers = Array.prototype.slice.call(
//         document.querySelectorAll(".navbar-burger"),
//         0
//       )

//       // Check if there are any navbar burgers
//       if ($navbarBurgers.length > 0) {
//         // Add a click event on each of them
//         $navbarBurgers.forEach(el => {
//           el.addEventListener("click", () => {
//             // Get the target from the "data-target" attribute
//             const target = el.dataset.target
//             const $target = document.getElementById(target)

//             // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//             el.classList.toggle("is-active")
//             $target.classList.toggle("is-active")
//           })
//         })
//       }
//     })
//   }

//   registerNavbarToggle()
// }
