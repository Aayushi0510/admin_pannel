// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useLocation } from 'react-router-dom'
// import Header from '../../UI/Header/Header'
// import VerticalNavBar from '../../UI/Verticalnavbar/VerticalNavBar'
// import { setIsCollapsed } from '../../../redux/slices/Sidenavlayoutslice'
// import { navigation } from '../../../navigation'


// const Sidenavlayout = ({ children }) => {
//     const dispatch = useDispatch()
//     const sideNavLayoutState= useSelector(
//         (state) => state.sideNavLayout
//     )
//     console.log(sideNavLayoutState)

//  const { isCollapsed } = sideNavLayoutState

//     const toggleCollapse = () => {
//         dispatch(setIsCollapsed(!isCollapsed))
//     }

//     const location = useLocation()

//     const currentPath = `/${location.pathname?.split('/')[1]}`

//     return (
//         <div className=" flex h-screen w-screen">
//             {/* Side Navigation Bar */}
//             <div
//                 className={`bg-black h-full transition-all duration-500 ease-in-out   ${
//                     isCollapsed
//                         ? 'min-w-[50px] w-[50px]'
//                         : 'min-w-[250px] w-[250px]'
//                 }`}
//             >
//                 <VerticalNavBar
//                     toggleCollapse={toggleCollapse}
//                     isCollapsed={isCollapsed}
//                     navigation={navigation}
//                     isPathEqualtoNavItem={(navItem) =>
//                     navItem.path === currentPath
//                     }
//                 />
//             </div>
//             <div
//                 className={`h-full ${
//                     isCollapsed
//                         ? 'min-w-[calc(100vw-50px)]'
//                         : 'min-w-[calc(100vw-250px)]'
//                 }`}
//             >
//                 {/* Header */}
//                 <div className=" border-b border-slate-300  ">
//                     <Header />
//                 </div>

//                 <div className="grow w-full h-full overflow-auto bg-slate-50  ">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidenavlayout

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Header from '../../UI/Header/Header'
import VerticalNavBar from '../../UI/Verticalnavbar/VerticalNavBar'
import { setIsCollapsed } from '../../../redux/slices/Sidenavlayoutslice'
import { navigation } from '../../../navigation'

const Sidenavlayout = ({children}) => {

        const dispatch = useDispatch()
    const sideNavLayoutState= useSelector(
        (state) => state.sideNavLayout
    )
    console.log(sideNavLayoutState)

 const { isCollapsed } = sideNavLayoutState

    const toggleCollapse = () => {
        dispatch(setIsCollapsed(!isCollapsed))
    }

    const location = useLocation()

    const currentPath = `/${location.pathname?.split('/')[1]}`


  return (
    <div className='flex w-full  relative overflow-hidden'>
        <div className={`relative  h-screen ${
                    isCollapsed
                        ? 'min-w-[50px] w-[50px]'
                        : 'min-w-[250px] w-[250px]'
                }`}>
        <div
                className= ' h-full w-full fixed transition-all duration-500 ease-in-out'
            >
                <VerticalNavBar
                    toggleCollapse={toggleCollapse}
                    isCollapsed={isCollapsed}
                    navigation={navigation}
                    isPathEqualtoNavItem={(navItem) =>
                    navItem.path === currentPath
                    }
                />
            </div>
        
        </div>
        <div className='w-full  min-h-screen relative'>
            <div className=''>
         <Header />
            </div>
            <div className='h-full bg-slate-200'>
         {children}
            </div>
        </div>
    </div>
  )
}

export default Sidenavlayout