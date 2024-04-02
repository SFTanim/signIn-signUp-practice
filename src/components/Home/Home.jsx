import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="hero min-h-fit" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex items-center flex-col">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Alrady have an acccount? <Link className="btn btn-ghost text-yellow-300 text-xl" to="/login">Login</Link> </p>
                        <p className="mb-5">New to this website? <Link className="btn btn-ghost text-yellow-300 text-xl" to="/register">Signup</Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;