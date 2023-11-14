// Imports section here

import Header from "./Components/Header.jsx";

import CoreConcepts from "./Components/CoreConcepts.jsx";

import Examples from "./Components/Examples.jsx";


// Main APP code here
function App() {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <h2>Time to get started!</h2>
                <Examples />
            </main>
        </>
    );
}

export default App;
