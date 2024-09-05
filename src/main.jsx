import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Greeting, MyFavFood, MyFavFoodPara, RandomSentences, Chunk, Bio, Avatar, TodoList, TodoList2, TodoList3, TodoList4, FormatDate} from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <MyFavFoodPara/>
    <MyFavFood/>
    <RandomSentences/>
    <Chunk/>
    <Bio/>
    <Avatar/>
    <TodoList/>
    <FormatDate/>
    <TodoList2/>
    <TodoList3/>
    <TodoList4/>
  </StrictMode>
)


