import cardpic from "./assets/cardphoto.jpeg"

function Message(){
    return(
        <header>
            <h1>Welcome to My house</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={cardpic}></img>
            <h2>Bro Code</h2>
            <p>We can make it</p>
        </div>
    );
}
export default Message;
export {Card}