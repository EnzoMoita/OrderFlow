import { Outlet } from "react-router-dom"
import { Pizza } from 'lucide-react'

export function AuthLayout(){
    return(
        <div className="grid min-h-screen grid-cols-2 antialiased" >
            <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
            <div className="flex items-center gap-3 text-lg text-foreground">
            <Pizza className="h-5 w-5" />
            <span className="font-semibold">OrderFlow</span>
            </div>
            <footer className="text-sm">
                Painel do parceiro &copy; OrderFlow - {new Date().getFullYear()}

            </footer>
            </div>

            <div className="relative flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
}