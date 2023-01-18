import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
    return (
        <AuthProvider>
            
            <h1 className='text-bg-primary p-3 d-flex justify-content-center mb-0 ' >
                HeroesApp
            </h1>

            <AppRouter/>

        </AuthProvider>
    )
}
