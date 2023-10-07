import Entree from "./Entree"
import Appetizer from "./Appetizer"
import Promotion from "./Promotion"
import "./menu.css"

export default function Menu() {
    return (
        <main className="menu-container" >
            <h2 className="menu-title" >
                Menu
            </h2>
            <div className="appetizer">
                <h3>Appetizer</h3>
                <Appetizer />
            </div>
            <Promotion />
            <div className="entree">
                <h3>Entree</h3>
                <Entree />
            </div>
        </main>
    )
}