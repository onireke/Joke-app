

function Joke(props){
    return(
        
           <div>
               {props.setup && <h3>setup: {props.setup}</h3>}
               <h4>{props.punchline}</h4>
               <hr />
           </div>
    

    )
}

export default Joke