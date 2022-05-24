const _404 = "../../404.js";

function App() {
  React.useEffect(() => {
    console.log(("init links"));
    return (() => console.log("links has been initialized"))
  })
  const [username, setUsername] = React.useState("Reyhan");
  const lists = [
    {name: "Profile", link: "/index.html"}, 
    {name: "Instagram", link: "https://www.instagram.com/xx.zerrr"}, 
    {name: "Github", link: "https://github.com/xxzerr"},
    {name: "Discord", link: "https://discord.com/users/395519218235211778"}
  ];
  return (
    <>
      <center>
        <div className={"profile-header"}>
          <img src={"Ryve.jpg"} className={"profile-picture"}></img>
          <p style={{margin: 0}} className={"profile-username"}>{username}</p>
        </div>
      </center>
      <div className="links-container">
        {lists.map((list) => {
          return <p className="link" key={list.name} onClick={() => window.location = list.link}>{list.name}</p> 
        })}
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
