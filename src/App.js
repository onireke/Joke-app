import Joke from "./components/Joke";

function App(){
  return (
       <div>
           <Joke 
                punchline= "She is just awesome"
           />

            <Joke setup = "I got my daughter a fridge for her birthday "
                punchline= "She is just awesome"
            />    

           <Joke setup = "I can't wait to see her lihgt up when she opens it"
                 punchline="exchanging the numbers"
           />
           <Joke setup = "How did the hacker escape the police"
                 punchline="He just ransomeware"
           />

           <Joke setup = "Why don't pyrates travel on montain roads "
                 punchline="swarm"
           />

           <Joke setup = "What is the best thing about Nigeria"
                 punchline="people like government!"
           />

      </div>
  )
}

export default App