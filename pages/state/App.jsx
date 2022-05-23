
function Hello() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("init")
  })

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Change</button>
    </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById("root"));