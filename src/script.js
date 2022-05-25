const body = document.body;
body.style.margin = 0;
body.style.height = "100vh";
body.style.width = "100vw";
body.style.overflowX = "hidden";
body.style.backgroundColor = "#202020";

const myname = ["Reyhan", "xxzerr"];
let isNavbarActive = false;

const background = Container({
  id: "background",
  children: [
    Container({
      class: "on-off-animation",
      size: Size(110, 110),
      borderRadius: Padding.insertAll(72, 25, 67, 12),
      backgroundColor: Colors.orange,
      opacity: "0.3",
      position: Position.absolute,
      top: "47%",
      left: "40%",
      transition: "3.5s",
    }),
    Container({
      id: "left-lg-bg-cl",
      size: Size(150, 130),
      borderRadius: Padding.insertAll(30, 100, 67, 12),
      backgroundColor: Colors.limegreen,
      opacity: "0.15",
      position: Position.absolute,
      top: "50%",
      transform: "translateX(-50%)",
      transition: "3.5s"
    }),
    Container({
      id: "top-gr-bg-cl",
      size: Size(150, 130),
      borderRadius: Padding.insertAll(30, 100, 67, 12),
      backgroundColor: Colors.limegreen,
      opacity: "0.3",
      position: Position.absolute,
    }),
    Container({
      class: "on-off-animation",
      size: Size(120, 120),
      borderRadius: Padding.insertAll(30, 100, 67, 12),
      backgroundColor: Colors.red,
      opacity: "0.3",
      right: -10,
      position: Position.absolute,
    }),
    Container({
      size: Size(90, 90),
      borderRadius: Padding.insertAll(72, 25, 67, 12),
      backgroundColor: Colors.darkblue,
      opacity: "0.2",
      position: Position.absolute,
      bottom: 0,
      right: 0,
    }),
    Container({
      position: Position.absolute,
      backdropFilter: Blur(80),
      inset: 0,
    })    
  ],
  position: Position.fixed,
  // width: "120vw",
  // height: "150vh",
  inset: 0,
  zIndex: "-1",
  height: "100vh",
});

const ProfileView = Container({
  id: "profile-view",
  children: [
    Container({
      child: Image.Asset("images/xxzerr.jpg", {
        id: "profile-picture",
        opacity: "0.95",
        // size: Size(130, 130),
        width: 130,
        height: 130,
        borderRadius: "100%",
        cursor: "pointer",
      }),
      display: Display.flex,
      justifyContent: JustifyContent.center,
    }),
    Container({
      id: "profile-name",
      transition: ".7s",
      display: Display.flex,
      alignItems: AlignItems.center,
      children: [
        Text(`Halo, saya `, {}),
        Text("Reyhan", {
          id: "name",
          marginLeft: "7px"
        }),
        Text("", {
          id: "cursor",
          transition: ".5s",
          margin: "3px 3px 0px 5px",
          width: "3px",
          height: "28px",
          backgroundColor: Colors.white,
        }),
        Text("." ,{
          color: Colors.white,
          fontWeight: "600",
          fontSize: 24,
          marginTop: 5,
        })
      ],
      fontFamily: "Poppins",
      color: Colors.white,
      fontWeight: "600",
      fontSize: 24,
      marginTop: 5,
    }),
    Container({
      id: "profile-bio",
      transition: ".7s",
      child: Text(
        "Saya adalah seorang pelajar kelas IX di SMPN 111 Jakarta, saya juga mempelajari bahasa pemrograman untuk mengisi waktu luang.", {
          fontFamily: "Manrope",
          color: Colors.white,
          fontWeight: "100",
          fontSize: 13,
          padding: Padding.insertAll(0, 25, 0),
          textAlign: TextAlign.center,
          marginTop: 5,
        }
      )
    })
  ],
  padding: "100px 0px 30px",
  display: Display.flex,
  flexDirection: Direction.column,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.center,
});

function generateSkillBox(id, imageSrc, title, message, link) {
  const detail_button = Button({
    context: "Details",
    borderRadius: "7px",
    border: "none",
  });
  
  detail_button.onclick = () => window.location = "https://"+link;

  const _box = Container({
    id: id,
    class: "box-skill",
    opacity: "0",
    transform: "scale(0.98)",
    margin: 5,
    children: [
      Image.Asset(imageSrc, {
        size: Size(70, 70),
        paddingTop: 15,
        paddingBottom: 2,
      }),
      Text(title, {cursor: "default"}),
      Text(message, {
        fontFamily: "Montserrat",
        fontWeight: "200",
        fontSize: 12,
        padding: 10,
        cursor: "default"
      }),
      detail_button,
    ],
  });

  return _box;
}

const SkillView = Container({
  id: "skill-view",
  width: "100vw",
  fontFamily: "Poppins",
  display: Display.flex,
  flexDirection: Direction.column,
  justifyContent: JustifyContent.center,
  alignItems: AlignItems.center,
  color: Colors.white,
  children: [
    Container({
      children: [
        Text("Skill", {
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "1px",
        }),
        Text("", {
          width: "130%",
          opacity: "0.4",
          height: "3px",
          borderRadius: "10px",
          backgroundColor: Colors.red
        }),
        Text("I'm a beginner", {
          paddingTop: 5,
          width: 200,
          textAlign: TextAlign.center,
          fontWeight: 200,
          fontSize: 14,
        }),
      ],
      paddingBottom: 25,
      width: "100px",
      display: Display.flex,
      flexDirection: Direction.column,
      justifyContent: JustifyContent.center,
      alignItems: AlignItems.center,
    }),
    Container({
      id: "skill-view",
      class: "skill-slider",
      width: "100%",
      children: [
        Container({
          display: Display.flex,
          flexWrap: "wrap",
          alignContent: "flex-start",
          justifyContent: JustifyContent.center,
          children: [
            generateSkillBox("skill-1", "images/java.png", "Java", 
              "Java is a high-level programming language, It is a general-purpose programming language intended to let programmers write once, run anywhere. Commonly used as the server-side language",
              "www.wikipedia.org/wiki/Java"
            ),
            generateSkillBox("skill-2", "images/javascript.jpg", "JavaScript",
              "JavaScript is a text-based programming language, used both on the client-side and server-side that allows you to make web pages interactive",
              "www.wikipedia.org/wiki/JavaScript"
            ),
            generateSkillBox("skill-3", "images/cpp.png", "C++",
              "C++ is a general-purpose programming language as an extension od the 'C Programming Language', or 'C With Classes', Modern C++ now has object-oriented, generic, and functional feautures in addition to facilities for low-memory manipulation",
              "www.wikipedia.org/wiki/C++"
            ),
            generateSkillBox("skill-4", "images/python.png", "Python", 
              "Python is a general-purpose programming language, commonly used for developing websites and software, task automation, data analysis, and data visualization",
              "www.wikipedia.org/wiki/Python_(programming_language)"
            ),
            generateSkillBox("skill-5", "images/dart.png", "Dart", 
              "Dart is a programming language that designed for client development, such as for web and mobile apps, It is developed by Google and can also be used to build server and desktop application",
              "www.wikipedia.org/wiki/Dart_(programming_language)"
            ),
            generateSkillBox("skill-6", "images/html5.png", "HTML", 
              "The HyperText Markup Langugage, or HTML is the standart markup language for documents designed to be displayed in a web browser",
              "www.wikipedia.org/wiki/Html"
            ),
          ],
        }),
      ],
    })
  ],
  marginBottom: 60,
});

function generateImageBox(imgSrc, title, message, link) {
  const detail_button = Button({
    context: "More",
    border: "none",
    marginTop: 15,
    id: "more-button-sch",
  })

  detail_button.onclick = () => {
    if(link != null) window.location = link;
    else Alert("There's no active site."); 
  }

  return Container({
    id: "image-box",
    display: Display.inlineBlock,
    justifyContent: JustifyContent.center,
    alignItems: AlignItems.center,
    textAlign: TextAlign.center,
    children: [
      Container({
        child: Image.Asset(imgSrc, {
          class: "school-image",
          borderRadius: "8px",
          width: "100%",
          height: "auto",
          transition: ".5s",
        }),
      }),
      Container({
        children: [
          Text(title, {
            fontSize: 18,
            paddingTop: 8,
          }),
          Text(message, {
            padding: Padding.insertAll(0, 20),
            fontFamily: "Montserrat",
            fontSize: 12,
            fontWeight: 200,
          }),
          detail_button,
        ],
      })
    ],
    padding: 20,
    paddingBottom: 10,
    marginBottom: 20,
    boxShadow: `0px 0px 20px ${Colors.rgba(0, 0, 0, 0.2)}`, 
    maxWidth: "80%",
    minWidth: "80%",
    borderRadius: "7px",
  });
}

const SchoolView = Container({
  id: "scholl-view",
  width: "100vw",
  fontFamily: "Poppins",
  display: Display.flex,
  flexDirection: Direction.column,
  justifyContent: JustifyContent.center,
  alignItems: AlignItems.center,
  color: Colors.white,
  children: [
    Container({
      children: [
        Text("School", {
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "1px",
        }),
        Text("", {
          width: "130%",
          opacity: "0.4",
          height: "3px",
          borderRadius: "10px",
          backgroundColor: Colors.green
        }),
        Text("Berikut tempat sekolah saya", {
          paddingTop: 5,
          width: 200,
          textAlign: TextAlign.center,
          fontWeight: 200,
          fontSize: 14,
        }),
      ],
      paddingBottom: 25,
      width: "100px",
      display: Display.flex,
      flexDirection: Direction.column,
      justifyContent: JustifyContent.center,
      alignItems: AlignItems.center,
    }),
    Container({
      id: "school-view",
      display: Display.flex,
      flexDirection: Direction.column,
      justifyContent: JustifyContent.center,
      alignItems: AlignItems.center,
      width: "100vw",
      children: [
        generateImageBox("images/SD.jpg", "SDN 01 Tanjung Duren Utara", "Saya telah menyelesaikan pendidikan ini pada 2019"),
        generateImageBox("images/SMP.jpg", "SMPN 111 Jakarta", "Saat ini saya sedang menduduki bangku SMP, dan saya akan lulus pada tahun ini, 2022", "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/20e5ea95-2bf5-e011-bebd-8b2b265de72b"),
      ]
    })
  ]
});

const navbarWidth = 27, navbarheight = 3;
const NavigationBar = Container({
  children: [
    Container({
      children: [
        Text("", {
          width: navbarWidth,
          height: navbarheight,
          backgroundColor: Colors.white,
          margin: 5,
          borderRadius: "5px",
        }),
        Text("", {
          width: navbarWidth,
          height: navbarheight,
          backgroundColor: Colors.white,
          borderRadius: "5px",
          margin: 5,
        }),
        Text("", {
          width: navbarWidth,
          height: navbarheight,
          backgroundColor: Colors.white,
          margin: 5,
          borderRadius: "5px",
        }),
      ],
      cursor: "pointer",
      marginRight: 7,
      display: Display.inlineBlock,
      id: "burger-button",
    })
  ],  
  id: "navbar-container",
  width: "100vw",
  height: "50px",
  zIndex: 999,
  position: Position.fixed,
  backdropFilter: Blur(7),
  backgroundColor: Colors.rgba(36, 36, 36, 0.1),
  boxShadow: `0 0 20px ${Colors.rgba(0, 0, 0, 0.2)}`,
  display: Display.flex,
  justifyContent: JustifyContent.flexEnd,
  alignItems: AlignItems.center,
  top: 0,
});

const createlist = (title, id, active_status, isPrivate) => Container({
  cursor: "pointer",
  class: "list-onhover",
  fontFamily: "Poppins",
  display: Display.flex,
  alignItems: AlignItems.center,
  marginBottom: 10,
  id: id != null ? id : null,
  children: [
    Text("", {
      width: "5px",
      height: "35px",
      backgroundColor: active_status ? Colors.limegreen : isPrivate ? Colors.purple : Colors.red,
      opacity: "0.7",
      marginLeft: 10,
      borderRadius: 10,
    }),
    Text(title, {
      class: "item-list",
    })
  ]
})

const NavbarView = Container({
  id: "navbar-view",
  child: Container({
    id: "navbar-list",
    children: [
      createlist('About me', "about-me-button", true, false),
      createlist("Skill", "skill-button", true, false),
      createlist("School", "school-button", true, false),
      createlist("Contact", "contact-button", true, false),
      createlist("My projects", "myprojects-button", false, false),
      createlist("Albums", "albums-button", false, true)
    ],
    marginTop: 50,
  }),
  transition: ".7s",
  width: "180px",
  height: "100vh",
  backgroundColor: Colors.rgba(0, 0, 0, 0.4),
  backdropFilter: Blur(40),
  // boxShadow: "0 0 20px black",
  top: 0,
  right: -180,
  position: Position.fixed,
})

const FooterView = Center({
  id: "footer",
  children: [
    Text("IG: @xx.zerrr", {
      fontFamily: "Poppins",
      paddingTop: 10,
      paddingBottom: 10,
      color: Colors.white,
    })
  ],
  backdropFilter: Blur(20),
  boxShadow: `0 0 10px ${Colors.rgba(0, 0, 0, 0.3)}`
}) 

/* RENDER */
Render(body, [background, ProfileView, SkillView, SchoolView, NavbarView, FooterView]);
Render(body, [NavigationBar]);
/* RENDER */

let isActive = false;
let removeDelay = 80;
let appendDelay = 230;

let dump = false;
const cursor = setInterval(() => {
  ID("cursor").style.opacity = dump? 0 : 1;
  dump = !dump;
}, 500);


// NAME ANIMATION
var counter = 0, index = 1;
async function remove() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  async function clear() {
    while(ID("name").innerText != "") {
      ID("name").innerText = ID("name").innerText.slice(0, -1);
      await new Promise(resolve => setTimeout(resolve, 80));
    }
    await new Promise(resolve => setTimeout(resolve, 400))
  }
  async function append() {
    while(ID("name").innerText != myname[index]) {
      ID("name").innerText = ID("name").innerText + myname[index].charAt(counter)
      counter++;
      await new Promise(resolve => setTimeout(resolve, 150))
    }
    index = index == 1 ? 0 : 1
    if(counter == myname[0].length) counter = 0;
    await new Promise(resolve => setTimeout(resolve, index == 0 ? 500 : 2000))
  }
  while(true) {
    await clear();
    await append();
  }
}
remove()



// const swiper = new Swiper(".skill-slider", {
//   loop: screen.width > 768 ? false : true,
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   centeredSlides: true,
//   grabCursor: true,
// })

const gbcl = ID("top-gr-bg-cl")
var gbclstop = false;
setInterval(() => {
  var gbclPosLeft = gbcl.getBoundingClientRect().left;
  if(!gbclstop) {
    gbcl.style.left = (gbcl.getBoundingClientRect().left + 3)+"px";
    if(gbcl.getBoundingClientRect().left > screen.width / 2) gbclstop = true;
  } else {
    gbcl.style.left = (gbcl.getBoundingClientRect().left - 3)+"px";
    if(gbcl.getBoundingClientRect().left < 0) gbclstop = false;
  }
}, 100)

let delay = async () => new Promise(resolve => setTimeout(resolve, 2000))
const lbcl = ID("left-lg-bg-cl");
let tgl = true;
setInterval(() => {
  tgl = AnimationStatus(tgl,
    () => lbcl.style.opacity = 0.15,
    () => lbcl.style.opacity = 0.05,
  )
}, 4000)


// Navbar toggler
let onToggle = false;
function hideNavbar() {
  onToggle = false;
  ID("navbar-view").style.right = "-180px";
  ID("navbar-view").style.zIndex = 0;
  ID("navbar-container").style.zIndex = 1;
  const navbarclose = ID("navbar-side-onclick");
  if(navbarclose != null) navbarclose.remove();
}

ID("burger-button").onclick = () => {
  onToggle = AnimationStatus(onToggle,
    () => hideNavbar(),
    () => {
      ID("navbar-view").style.right = 0,
      ID("navbar-view").style.zIndex = 1,
      ID("navbar-container").style.zIndex = 2,
      Render(body, [Container({
        id: "navbar-side-onclick",
        position: Position.fixed,
        inset: 0,
        zIndex: "0",
        actions: {
          click: () => {
            onToggle = false;
            hideNavbar();
          }
        }
      })])
    }
  );
  isNavbarActive = !isNavbarActive;
}


const blurview = Container({
  position: Position.fixed,
  backdropFilter: Blur(2),
  inset: 0,
  opacity: "0",
  transition: ".7s",
  zIndex: "-1",
})

Render(body, [blurview])

const profpic = ID("profile-picture");
profpic.style.transition = ".7s"

profpic.onmouseover = async () => {
  blurview.style.zIndex = "0";
  blurview.style.opacity = "1";
  ID("profile-name").style.transform = "scale(0.8)";
  ID("profile-bio").style.transform = "scale(0.8)";
  profpic.style.zIndex = "1";
  profpic.style.width = "200px";
  profpic.style.height = "200px";
}

profpic.onmouseout = () => {
  ID("profile-name").style.transform = "scale(1)";
  ID("profile-bio").style.transform = "scale(1)";
  blurview.style.opacity = "0";
  blurview.style.zIndex = "-1";
  profpic.style.zIndex = "0";
  profpic.style.width = "130px";
  profpic.style.height = "130px";
}

const imageBox = document.querySelectorAll(".box-skill");
const delayPerEachView = 150;
if(screen.height < 900) {
  document.addEventListener("scroll", async () => {
    const clientHeight = document.documentElement.clientHeight;
    ID("skill-header").style.opacity = 1;
    await new Promise(resolve => setTimeout(resolve, delayPerEachView));
    for(var i=0; i<imageBox.length; i++) {
      const imgPosY = imageBox[i].getBoundingClientRect().y;
      const imgPosHeight = imageBox[i].getBoundingClientRect().height;

      if(clientHeight > imgPosY + (imgPosHeight * 2/3)) {
        imageBox[i].style.transition = "1s";
        imageBox[i].style.opacity = 1;
      }
      await new Promise(resolve => setTimeout(resolve, delayPerEachView))
    }
  })
} else { 
  async function run() {
    await new Promise(resolve => setTimeout(resolve, 100))
    for(var i=0; i<imageBox.length; i++) {  
      imageBox[i].style.opacity = 1;
      await new Promise(resolve => setTimeout(resolve, delayPerEachView))
    }
  }
  run()
}

ID("about-me-button").onclick = () => {
  ontoggle = false;
  scrollToElement("profile-view", 0);
  hideNavbar();
} 
ID("skill-button").onclick = () => {
  ontoggle = false;
  scrollToElement("skill-view", 70);
  hideNavbar();
}
ID("school-button").onclick = () => {
  ontoggle = false;
  scrollToElement("school-view", 160);
  hideNavbar();
}
async function HandleAlertHide() {
  document.getElementById("alert-view").style.opacity = 0;
  await new Promise(resolve => setTimeout(resolve, 300))
  document.getElementById("alert-view").remove()
}
ID("myprojects-button").onclick = async () => {
  ontoggle = false;
  hideNavbar();
  Alert("this page is under construction");
}
ID("contact-button").onclick = () => {
  ontoggle = false;
  hideNavbar();
  window.location = "pages/contact/public";
}

ID("albums-button").onclick = () => {
  ontoggle = false;
  hideNavbar();
  
  const HandleInput = (ID, placeholder)  => {
    const box = TextField({
      id: ID,
      width: "80%", 
      textHint: placeholder, 
      padding: 5, 
      backgroundColor: "transparent",
      color: Colors.lightgray,
      fontFamily: "Poppins",
      borderRadius: "5px", 
      border: "1px solid grey",
      outline: "none",
      transition: ".3s",
      class: "input",
    });
    return box;
  }

  const button_submit = Button({
    context: "Submit",
    borderColor: Colors.grey,
    color: Colors.grey,
    id: "submit-button",
    transition: ".1s",
  });

  const alertbox = Container({
    width: "80%",
    maxWidth: 300,
    backdropFilter: Blur(20),
    position: Position.fixed,
    backgroundColor: Colors.rgba(0, 0, 0, 0.1),
    boxShadow: `0px 0px 3px ${Colors.rgba(255, 255, 255, 1)}`,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Poppins",
    borderRadius: "5px",
    padding: 15,
    transition: ".3s",
    opacity: "0",
    children: [
      Container({
        child: Text("Verify Who are you", {textAlign: TextAlign.center, color: Colors.white}),
      }),
      Container({
        display: Display.flex,
        flexDirection: Direction.column,
        justifyContent: JustifyContent.spaceAround,
        alignItems: AlignItems.center,
        height: 100,
        children: [
          HandleInput("username-input", "Name"),
          HandleInput("password-input", "Password"),
        ]
      }),
      Container({
        display: Display.flex,
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        height: "auto",
        child: button_submit,
        transition: ".5s",
      })
    ]
  })

  button_submit.onclick = () => {
    const usInput = ID("username-input").value;
    const pwInput = ID("password-input").value;

    if(usInput && pwInput) {
      if(usInput == "xxzer" && pwInput == "230801") {
        Alert("Login success");
      } else {
        Alert("Invalid!");
      }
    }
    else Alert("Please fill the input first");
  }

  function handleSubmitOnHover() {
    button_submit.onmouseover = () => {
      button_submit.style.color = Colors.white;
      button_submit.style.border = " 1px solid white";
      button_submit.style.boxShadow = "0px 0px 5px white";
    }
    button_submit.onmouseout = () => {
      button_submit.style.color = Colors.gray;
      button_submit.style.border = " 1px solid gray";
      button_submit.style.boxShadow = "none";
    }
  } 
  handleSubmitOnHover();

  const verify = async () => {
    const _Back = Container({
      position: Position.fixed,
      inset: 0,
      backgroundColor: Colors.rgba(0, 0, 0, 0.6),
      transition: ".3s",
      opacity: "0",
    });

    _Back.onclick = async () => {
      _Back.style.opacity = "0";
      alertbox.style.opacity = "0";
      await new Promise(resolve => setTimeout(resolve, 300));
      _Back.remove();
      alertbox.remove();
    }

    Render(body, [_Back, alertbox]);

    await new Promise(resolve => setTimeout(resolve, 0));
    _Back.style.opacity = "1";
    alertbox.style.opacity = "1";
  };
  verify();
}

function scrollToElement(element ,offset) {
  var elementPos = document.getElementById(element).getBoundingClientRect().top;
  var offsetPos = elementPos + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPos,
    behavior: "smooth"
  })
} 

