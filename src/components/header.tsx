
function Header(props : any){
    return (
        <div className="flex items-center justify-between w-screen p-4 bg-white
         text-gray-800 shadow-sm border-b-gray-600">
            <div >
                <span className="inline-flex flex-col items-center justify-center w-8 h-8
                 rounded-full bg-black text-white font-bold text-xl">G</span>
                <span className="text-2xl font-bold ml-2">Get Up</span>
            </div>
            <nav className="mt-4">
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-900 hover:underline">Home</a></li>
                    <li><a href="/about" className="text-gray-900 hover:underline">About</a></li>
                    <li><a href="/contact" className="text-gray-900 hover:underline">Portfolio</a></li>
                    <li><a href="/contact" className="text-gray-900 hover:underline">Blog</a></li>
                    <li><a href="/contact" className="text-gray-900 hover:underline">Contact</a></li>
                </ul>
            </nav>
            
            <button className="text-sm text-gray-500">Get Started</button>
            
        </div>
    )
}
export default Header;