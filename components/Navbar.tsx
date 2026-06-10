export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-6">
            <h1 className="text-2xl font-bold">
                Michael
            </h1>

            <div className="flex gap-6">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}