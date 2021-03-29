import {useState} from "react"
import AddExeat from "./components/AddExeat";
import AllExeats from "./components/AllExeats";
import Navbar from './components/NavBar';

function App() {
    const [show, setShow] = useState(false);
    const [exeats] = useState([
     {
      name: "Hanan",
      level:100,
      hometown: "Dafiama",
      destination: "Kumasi",
      reason: "funeral",
      departure: "28/02/2021",
      returnDate: "05/03/2021",
      phone: "0247992366",
     },
     {
      name:"Rafiq",
      level:400,
      hometown: "Jirapa",
      destination: "Tumu",
      reason: "Party time",
      departure: "14/02/2021",
      returnDate: "17/02/2021",
      phone: "0506838587",
     },
     {
      name:"Oprah",
      level:200,
      hometown: "Dafiama",
      destination: "Bamahu",
      reason: "Treatment",
      departure: "25/03/2021",
      returnDate: "01/04/2021",
      phone: "0506238456",
     },
     {
      name:"Khadija",
      level:300,
      hometown: "Tumu",
      destination: "Tumu",
      reason: "Treatment",
      departure: "25/03/2021",
      returnDate: "29/03/2021",
      phone: "0506238552",
     },
     {
      name:"Awudu",
      level:500,
      hometown: "Tumu",
      destination: "Wa",
      reason: "Treatment",
      departure: "27/03/2021",
      returnDate: "29/03/2021",
      phone: "0506938552",
     },
     {
      name:"Donnish",
      level:200,
      hometown: "Nakori",
      destination: "Chansa",
      reason: "Funeral",
      departure: "26/03/2021",
      returnDate: "27/03/2021",
      phone: "0506231552",
     },
     {
      name:"Hardy",
      level:400,
      hometown: "Wa municipal",
      destination: "Wa regional hospital",
      reason: "Treatment",
      departure: "25/03/2021",
      returnDate: "25/03/2021",
      phone: "0506238557",
     },

    ])
    const toggle = () => {
        setShow(!show)

    };
    return (
      <main>
        <Navbar show={show} toggle={toggle}/>
        {show && <AddExeat/>}
        <AllExeats exeats={exeats}/>
      </main>
    );   
 }
export default App;
