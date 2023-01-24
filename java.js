const body = document.querySelector("body"),
      sidebar = body.querySelector(".sideBar"),
      toggle = body.querySelector(".toggleBtnDiv");
      const x = body.querySelector(".toggleImg1")

  toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close")
    toggle.classList.toggle("toggle")
  })
