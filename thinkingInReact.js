// # Initial State: {doPasswordMatch: false}

// #Initial View
// - doPasswordMatch? if yes then show move forward, if now then show password don not match.
// - View: Password do not match 

// # Event
// # Read Input
// # Compare both password

// # new State
// - if both password equal then set state to {doPasswordMatch:true}

// # new View
// -doPasswordMatch? if true then move forward
// - View: You can proceed forward

// ex2
<h1 style={{ color: colors }}>Hello CodeSandbox</h1>
      <button
        onClick={() =>
          colors == "red" ? setColor("transparent") : setColor("red")
        }
      >
        click me
      </button>

// ex3
export default function App() {
    const [words, setWords] = useState(0);
    return (
      <div className="App">
        <textarea onChange={(e)=>{setWords(e.target.value.length)}}>
  
        </textarea>
        <p>{words}</p>
      </div>
    );
  }

// ex4
export default function App() {
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    return (
      <div className="App">
        <input type="text" onChange={(e) => setInputOne(e.target.value)} name="name" />
        <input type="password" onChange={(e) => setInputTwo(e.target.value) } name="name" />
        <p>{inputOne==inputTwo?"password match":"password do not match"}</p>
      </div>
    );
  }
  
// ex5
export default function App() {
    const [inputOne, setInputOne] = useState("");
  
    return (
      <div className="App">
        <input type="text" onChange={(e) => setInputOne(e.target.value)} name="name" />
        <p>{
          /\d/.test(inputOne)?'correct':'incorrect'
        }</p>
      </div>
    );
  }

// ex6
export default function App() {
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => setInputOne(e.target.value)}
          name="name"
        />
        <input
          type="password"
          onChange={(e) => setInputTwo(e.target.value)}
          name="name"
        />
        <p>{inputOne == inputTwo ? "password match" : "password do not match"}</p>
        <button
          disabled={!(inputOne == inputTwo)}
          onClick={(e) =>
            inputOne == inputTwo
              ? console.log(inputOne)
              : (e.target.disable = "true")
          }
        >
          Submit
        </button>
      </div>
    );
  }
   
// ex7
export default function App() {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="App">
        {console.log(showPassword)}
        <input type={showPassword ? "text" : "password"} name="name" />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "hide password" : "show password"}
        </button>
      </div>
    );
  }
  
// // ex8
export default function App() {
    const [cart, setCart] = useState({});
  
    return (
      <div className="App">
        <button
          onClick={() => {
            cart.apple
              ? setCart({ ...cart, apple: cart.apple + 1 })
              : setCart({ ...cart, apple: 1 });
          }}
        >
          Add Apple
        </button>
        <button
          onClick={() => {
            cart.mango
              ? setCart({ ...cart, mango: cart.mango + 1 })
              : setCart({ ...cart, mango: 1 });
          }}
        >
          Add Apple
        </button>
        <p>{"Your cart contains"}</p>
        <ul></ul>
        {Object.keys(cart).map((item) => (
          <li>{`${item} ${cart[item]} `}</li>
        ))}
      </div>
    );
  }
  

// ex9
export default function App() {
    const [page, setPage] = useState("home");
    const Home = () => <h1>home</h1>;
    const Details = () => <h1>details</h1>;
    const Contact = () => <h1>contact</h1>;
    return (
      <div className="App">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("details")}>Details</button>
        <button onClick={() => setPage("contact")}>Contact</button>
        {page == "home" ? (
          <Home />
        ) : page == "details" ? (
          <Details />
        ) : (
          <Contact />
        )}
      </div>
    );
  }
  
// ex10
export default function App() {
    const [showToast, setShowToast] = useState(false);
  
    const Toast = (props) => {
      return (
        <div>
          <p>this is the message!</p>
          <button onClick={props.toastProp}>hide</button>
        </div>
      );
    };
    const toggleShowToast = () => setShowToast(!showToast);
  
    return (
      <div className="App">
        <button onClick={toggleShowToast}>show toast</button>
        {showToast ? <Toast toastProp={toggleShowToast} /> : <p>Site content</p>}
      </div>
    );
  }

// ex11
export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoWork, setTodoWork] = useState("");
  
    return (
      <div className="App">
        <input
          onChange={(e) => setTodoWork(e.target.value)}
          placeholder="Enter your task here"
        />
        <button onClick={() => setTodoList([...todoList, todoWork])}>add</button>
        {todoList.map((item) => (
          <p
            onClick={(e) =>
              e.target.style.textDecoration == "line-through"
                ? (e.target.style.textDecoration = "none")
                : (e.target.style.textDecoration = "line-through")
            }
          >
            {item}
          </p>
        ))}
      </div>
    );
  }
  
// ex12
export default function App() {
    const [darkmode, setDarkmode] = useState(false);
    const darkTheme = { color: "white", background: "black" };
    const toggleTheme = () => setDarkmode(!darkmode);
    return (
      <div className="App">
        <div style={darkmode ? darkTheme : {}} className="main">
          <button onClick={toggleTheme}>dark mode</button>
          <h1>heading</h1>
          <p>content</p>
        </div>
      </div>
    );
  }

// ex13
export default function App() {
    const [itemList, setItemList] = useState([
      { item: "apple", id: 0, liked: 0 },
      { item: "mango", id: 1, liked: 1 },
      { item: "kela", id: 2, liked: 0 }
    ]);
  
    return (
      <div className="App">
        {itemList.map((i) => (
          <li>
            liked {i.liked}
            {i.item}{" "}
            <button
              onClick={() => {
                let t = [...itemList];
                t[i.id] = { item: i.item, id: i.id, liked: i.liked + 1 };
                setItemList(t);
              }}
            >
              like
            </button>{" "}
          </li>
        ))}
      </div>
    );
  }
  
// ex14
export default function App() {
    const [itemList, setItemList] = useState([
      { item: "apple", id: 0, inStock: true },
      { item: "mango", id: 1, inStock: false },
      { item: "kela", id: 2, inStock: true }
    ]);
  
    return (
      <div className="App">
        <ul>
          {itemList.map((i) => (
            <li style={i.inStock ? { color: "black" } : { color: "red" }}>
              {i.item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
