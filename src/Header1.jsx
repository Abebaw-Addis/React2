import React, { useState } from 'react'
import "./Styles/header.css"

    const NestedMenuBar = ({title, items}) => {
        const[isOpen, setIsOpen] = useState(false)
        
        const handleToggle = () => {
            setIsOpen(prev => !prev);
        }

        return(
            <div className="nested-menu">
                <div onClick={handleToggle} className='menu-title'>
                    {title}
                </div>
                {isOpen && ( <div className='subMenu'>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => item.action()}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        )
    }

    const Header = ()=> {
        const[menu, setMenu] = useState(false)
        function handleMainMenu(){
            setMenu(!menu)
        }
        const handleMenuItemClick = (action) =>{
            console.log(`You Clicked on ${action}`)
        };

        return(
            <div className="menu-bar">
                <button className="Menu" onClick={handleMainMenu}>Menu</button>
                {menu && 
                <div className="menu-items">
                    <NestedMenuBar 
                    title="Seetings"
                    items={[
                        {label: "Profile", action: ()=> handleMenuItemClick('Profile')},
                        {label: "Account", action: ()=> handleMenuItemClick('Account')},
                        {label: "Darkness", action: ()=> handleMenuItemClick('Darkness')},
                            ]} />

                    <NestedMenuBar 
                        title="Share"
                        items={[
                            {label: "Share On Facebook", action: ()=> handleMenuItemClick('Share On Facebook')},
                            {label: "Share On Telegram", action: ()=> handleMenuItemClick('Share On Telegram')},
                            {label: "Share On Twitter", action: ()=> handleMenuItemClick('Share On Twitter')},
                                ]} />

                    <NestedMenuBar 
                        title="Seetings"
                        items={[
                            {label: "Profile", action: ()=> handleMenuItemClick('Profile')},
                            {label: "Account", action: ()=> handleMenuItemClick('Account')},
                            {label: "Darkness", action: ()=> handleMenuItemClick('Darkness')},
                                ]} />

                    <div onClick={()=> handleMenuItemClick('Help')}>Help</div>
                    <div onClick={()=> handleMenuItemClick('LogOut')}>LogOut</div>
                    <div onClick={()=> handleMenuItemClick('Subscribe')}>Subscribe</div>

                </div>}
            </div>
        );
    }
    
export default Header;