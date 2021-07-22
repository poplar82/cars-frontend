import "./App.css";
import Nav from "./Components/Nav/Nav";
import Cars from "./Components/Cars"
import Car from "./Components/Car/Car";
import Footer from "./Components/Footer/Footer";
import CarsColor from "./Components/CarsColor";
import CarAdd from "./Components/Add/CarAdd";
import CarEdit from "./Components/Edit/CarEdit";
import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [car, setCar] = useState({
            id: "10",
            mark: "",
            model: "",
            color: "",
            yearOfProduction: ""
        }
    );

    function updateState(newCar) {
        setCar(newCar);
    }

    return (
        <Router>
            <Nav/>
            <main>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Cars onSubmit={updateState} />
                        </Route>
                        <Route exact path="/cars/:carId" component={Car} />
                        <Route exact path="/cars/color/:carColor">
                            <CarsColor onSubmit={updateState} />
                        </Route>
                        <Route exact path="/add" component={CarAdd} />
                        <Route exact path="/edit">
                            <CarEdit objectCar={car} />
                        </Route>
                    </Switch>
                </div>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
