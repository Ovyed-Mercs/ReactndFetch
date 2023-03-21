// import React,{useState,useEffect} from "react";
// import { List } from "./List.jsx";

// //create your first component
// const Home = () => {
// 	const [toDos,setToDos]=useState([])
// 	console.log(toDos)
// 	const [inputValue,setInputValue]=useState("")
// 	let apiUrl='https://assets.breatheco.de/apis/fake/todos/user/OVYEDDeno'
// 	const getList=()=> {
// 		fetch(apiUrl).then(resp=>resp.json()).then(data=>setToDos(data)).catch(error=>console.log(error))
// 	}
// 	useEffect(() => {
// 	getList()
// 	  }, []);

// 	return (
		
// 		<div className="text-center">
// 			<input type="Text" onChange={(e)=>setToDos(e.target.value)}/>
// 			<List toDos={toDos}/>
// 		</div>
// 	);
// };

// export default Home;
import React, {useState} from "react";
import "../../styles/index.css"

//create your first component
const Home = () => { 
	const [item, setItem]=useState("")
	const [toDoList, setToDoList]=useState([])
	console.log(item)
	console.log(toDoList)	
	const addItems=(newItems)=>{
		let newList = [...toDoList, {label:newItems,done:false}]
		fetch("https://assets.breatheco.de/apis/fake/todos/user/OVYEDDeno", {
			method: 'PUT',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify(newList),
			redirect: "follow"
		})
		.then((resp)=>{
			resp.status===200 ?setToDoList(newList) : "";
		})
		.catch((error)=> console.log("error", error))
	}

	const deleteItems=(index)=>{
		let toDo = toDoList.filter((words, i)=>index!=i)
		fetch("https://assets.breatheco.de/apis/fake/todos/user/OVYEDDeno", {
			method: 'PUT',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify(toDo),
			redirect: "follow"
		})
		.then((resp)=>{
			resp.status===200 ?setToDoList(toDo) : "";
		})
		.catch((error)=> console.log("error", error))
	}
//  function myFunction(index) {
// 	let toDo = toDoList.filter((words, i)=>index!=i)
// 	setToDoList(toDo)
//  }
	return (
	<><div>
			<input type="text" onChange={(e) => setItem(e.target.value)} value={item} className="input" placeholder="Add a task"></input>
			<button onClick={() => {
				if(item===""){
					return alert("You need to add task!")
				} else {
				addItems(item);
				setItem("");
} 				
			} }>Add a Task</button>




		</div><div>
			{
				toDoList.map((words, index)=>{
					return(
						<><div key={index}>
							{words.label}
						</div><div>
						<button onClick={()=>{
								deleteItems(index)
							}}>X</button>
							</div></>
					)
				})
			}
			</div></>
	);
};

export default Home;
