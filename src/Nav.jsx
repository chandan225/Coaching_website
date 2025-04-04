import logo from './assets/logo.png';

export default function Nav()
{
    return(
        <>
        <nav className="flex justify-between p-3 min-h-10 text-rose-50">
        <div className="logo "><img src={`${logo}`} alt="RCC logo" className='h-10 w-auto'/></div>
        <div className="conatct cursor-pointer">Contact us</div>
    </nav>
        <h1 className="text-2xl text-center text-rose-50"><span className="font-light">Welcome to</span> <br/>
        <span className="font-mono font-bold">Restart Science Classes</span> <br />
        <span className="text-sm">Your future, our commitment.</span> </h1>
        </>
    );
    
}
