import { setAccessToken, setRefreshToken } from "../redux/slices/AuthSlice"

export const singnOut = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userData')
    window.location.replace('/')
}
export const authMiddleware = (store) => (next) => (action) => {
    const result = next(action)
    const token = localStorage.getItem('authToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const userData = localStorage.getItem('userData')
    console.log(result?.payload?.data?.msg)
    // if (result.error && result.payload && result.payload.status === 401) {
    //     store
    //         .dispatch(
    //             // apiSlice.endpoints.refreshToken.initiate({
    //             //     refreshToken: localStorage.getItem('refreshToken'),
    //             // })
    //         )            .then((res) => {
    //             if (
    //                 res?.error &&
    //                 (res?.error?.status === 401 || res?.error?.status === 500)
    //             ){
    //                 singnOut()
    //             } else {
    //                 store.dispatch(setAccessToken(res?.data?.data?.accessToken))
    //                 store.dispatch(
    //                     setRefreshToken(res?.data?.data?.refreshToken)
    //                 )
    //                 localStorage.setItem('authToken', res.data?.data?.accessToken)
    //                 localStorage.setItem(
    //                     'refreshToken',
    //                     res.data?.data?.refreshToken
    //                 )
    //             }
    //         })
    // } else if (token && refreshToken && !userData) {
    //     singnOut()
 
    // }
    return result
}