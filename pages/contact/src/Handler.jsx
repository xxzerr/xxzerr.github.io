function handleLink(id) {
  if(id == "ig") {
    // window.location = "https://www.instagram.com/xx.zerrr";
    alert("instagram")
  }
  else if(id == "discord") alert("discord");
  else if(id == "github") alert("github");
  else if(id == "profile") window.location = "../../../index.html"
  else PageNotFound();
}
