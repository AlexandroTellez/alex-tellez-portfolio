import logo from "../assets/Logo-white.png";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="h-90 w-auto" />
            </div>
            {/*Menu*/}
            
        </nav>
    )
}

export default Navbar
