project name : Dev Stack

Dev Stack is a simple web application whewe users can explore different technology stack. Users can add technologies to their stack and remove them whenever they want .

Techologies I used
React
javaScript
Tailwind Css
DaisyUI
React-Tostify 
Vite


Features
1. Users can see different technologies with thier name and category 

2.Users can add technologies to thier own stack.

3. Users can remove one technology or removea ll technologies from the stack


Getting started 

npm install
npm run dev



1. What is JSX, and why is it used in React?
JSX is a way to write HTML like code inside Javascript . We use JSX to create the UI of a React application

2.What is the difference between props and state? 

 Props are used to send data from parent to child 

state is used to store data inside a component 


3.What does the useState hook do, and where did you use it in this project?

useStae is used to store and change data un React.

In my project, i used it to store the selected technologies .
const [stack,setStack]= useState([]);
when i add or remove a technology , i update the stack.


4.What does the useEffect hook do, and why did you need it to load the JSON data?


useEffect is used to liad the technology data from th JSON file . When the page loads , the technology data is loaded .

5.Why does every item in a .map() list need a unique key prop?

map key helps React indentify each iten in a list.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).


Conditional rendering means showing different content based on a condition.

in my project , when the stack is empty , i show no technology selected yet.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

we use props to send data from parent to child . In my project i passed stack , onRemove and oneRemoveAll ot the stackSidebar componet .
for example onclick={()=> onRemove(item.id)}
Here, the child calls the parents onRemove function with the selected items id.