import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../../Assets/logo1.png"

const VerticalNavBar = ({
    toggleCollapse,
    isCollapsed,
    navigation,
    isPathEqualtoNavItem = (navItem) => false,
}) => {
    const navigate = useNavigate()
    return (
        <div className="h-full bg-black overflow-hidden ">
            {/* Logo & Menu Icon */}
            <div
                className={`flex px-3 items-center bg-white py-2 ${
                    isCollapsed ? 'justify-between' : 'justify-between'
                }`}
            >
                {/* Logo */}
                {!isCollapsed && (
                    <div className="font-semibold text-xl">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-full w-[144px]"
                        />
                    </div>
                )}

                {/* Menu Icon */}
                <div
                    onClick={toggleCollapse}
                    className="h-full flex flex-col gap-1 cursor-pointer "
                >
                    <div
                        className={`h-[1.5px] w-5 bg-slate-500 transition-all duration-500 ${
                            !isCollapsed &&
                            'origin-top-left translate-x-[1.5px]  rotate-45'
                        }`}
                    >
                        {' '}
                    </div>
                    {isCollapsed && (
                        <div className={`h-[1.5px] w-5 bg-slate-500`}> </div>
                    )}
                    <div
                        className={`h-[1.5px] w-5 bg-slate-500 transition-all duration-500 ${
                            !isCollapsed &&
                            'origin-top-left translate-y-2  -rotate-45'
                        }`}
                    >
                        {' '}
                    </div>
                </div>

                {/* <div onClick={toggleCollapse} className="text-xl text-slate-500">
            <FiMenu />
          </div> */}
            </div>

            {/* Navigations */}
            <div className="h-full px-3 py-5 flex flex-col gap-1">
                {navigation?.map((navItem, navIndex) => {
                    return (
                        <div
                            key={navIndex}
                            onClick={() => navigate(navItem.path)}
                            className={`
                flex
                gap-3
                items-center 
                rounded 
                p-2 
                cursor-pointer  
                hover:bg-slate-200 
                hover:text-black
                transition-all
                duration-500
                text-normal
                ${isCollapsed && 'justify-center'} 
                ${
                    isPathEqualtoNavItem(navItem)
                        ? 'bg-slate-200 text-gray-700 font-semibold'
                        : 'text-white'
                } 
                `}
                        >
                            <div className="py-1">
                                {' '}
                                <navItem.icon />{' '}
                            </div>
                            {!isCollapsed && (
                                <div className=""> {navItem.label} </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VerticalNavBar
