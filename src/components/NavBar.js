function Navbar({show, toggle}) {
     
    return(
        <nav className="container">
            <div>
                <h1>STUDENTS EXEAT APP</h1>
            </div>
            <button onClick={toggle}>{ show ? "CLOSE" : "ADD"}</button>
        </nav>
    )
}
export default Navbar;
