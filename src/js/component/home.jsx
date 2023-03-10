import React,{useState,useEffect} from "react";
import { List } from "./List.jsx";

//create your first component
const Home = () => {
	const [toDos,setToDos]=useState([])
	const [inputValue,setInputValue]=useState("")
	let apiUrl='https://assets.breatheco.de/apis/fake/todos/user/OVYEDDeno'
	const getList=()=> {
		fetch(apiUrl).then(resp=>resp.json()).then(data=>setToDos(data)).catch(error=>console.log(error))
	}
	useEffect(() => {
	getList()
	  }, []);

	return (
		<div className="text-center">
			<List toDos={toDos}/>
		</div>
	);
};

export default Home;
