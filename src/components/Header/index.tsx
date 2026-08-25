import Logo from '../../assets/images/logo/logo.svg'
import IconUser from '../../assets/images/icons/user.svg'
import IconHelp from '../../assets/images/icons/help.svg'
import IconBag from '../../assets/images/icons/bag.svg'

export const Header = () => {
    return(
        <div className="relative">
            <header className="fixed bg-amber-700 top-0 left-0 right-0 z-10 mx-10">
                <div className='bg-white max-w-330 mx-auto flex justify-between items-center px-5 py-7 rounded-2xl mt-5'>
                    <img src={Logo} alt="Logo SyntaxWear" className='w-32 md:w-36'/>
                    <nav className='hideen md:block'>
                        <ul className='flex gap-10'>
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#"></a>Feminino</li>
                            <li><a href="#"></a>Outlet</li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='flex gap-4 md:gap-10'>
                            <li className='hideen md:block'><a href="#" /> Nossas Lojas</li>
                            <li className='hideen md:block'><a href="#" />Sobre</li>
                            <li><img src={IconUser} /></li>
                            <li><img src={IconHelp} /></li>
                            <li><img src={IconBag} /></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}