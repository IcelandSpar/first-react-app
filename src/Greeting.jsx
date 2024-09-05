export function Greeting() {
  return <h1>Greetings !</h1>;
}
export function MyFavFoodPara() {
  return <p className="fav-food-para fav-food">My Fav Food:</p>;
}

export function MyFavFood() {
  return <p className="fav-food-name fav-food">Pizza 🍕</p>;
}

export function RandomSentences() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
        similique.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
        quo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
        asperiores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        alias.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, tenetur.
      </p>
    </>
  );
}

export function Chunk() {
  return (
    <div>
      <h1>Test Title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2"></circle>
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export function Bio() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br></br>
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </>
  );
}

export function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
    <img src={avatar} alt={description} />
  )
}

export function TodoList() {
  const name = 'Hedy Lamarr';
  return (
    <h1>{name}'s To Do List</h1>
  )
}

const today = new Date();

function formating(date) {
  return new Intl.DateTimeFormat('en-US',
    {
      month: "short",
      weekday: 'short',
      hour: "numeric",
      minute: "numeric"
    }
  ).format(date)
}

const person = {
  name: 'Gregorio Y. Zara',
  url: "https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif",
  baseUrl: "https://i.imgur.com/",
  imageId: '7vQD0fP',
  imageSize: 'b',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

export function FormatDate() {
  
  return (
    
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      <p>{formating(today)}</p>
    </div>
  )
}

export function TodoList2() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export function TodoList3() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.url}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

const baseUrl = 'https://i.imgur.com/';
export function TodoList4() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpeg`}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

