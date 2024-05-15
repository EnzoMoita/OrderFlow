import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { registerRestaurant } from '@/api/register-restaurant'

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email:z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
    const navigate = useNavigate()

    const {register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    const { mutateAsync: registerRestaurantFn } = useMutation({
        mutationFn: registerRestaurant,
    })

    async function handleSignUp(data:SignUpForm){
        try{
            console.log(data)

            await registerRestaurantFn({
                restaurantName: data.restaurantName,
                managerName: data.managerName,
                email: data.email,
                phone: data.phone,

            })

           toast.success('Restaurante cadastrada com sucesso!', {
              action: {
                   label: 'Login',
                   onClick: () => navigate(`/sign-in?email=${data.email}`),
                },
            })
    
        } catch{
            toast.error('Erro ao cadastrar resturant.')


        }
    }


    return (
    <>
        <Helmet title="Cadastro" />
        <div className="p-8">
        <Button variant="secondary" asChild className="absolute right-8 top-8">
            <Link to="/sign-in">
                Fazer login
            </Link>
            </Button>

            <div className="w-[350px] flex  flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Crie sua conta grátis
                        </h1>
                    <p className="text-sm text-muted-foreground">
                    Cadastre-se agora para começar a gerenciar seus pedidos
                    </p>
                </div>

            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input 
            id="restaurantName" 
            type="text" 
            {...register('restaurantName')}
             />
            </div>

            <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input 
            id="managerName" 
            type="text" 
            {...register('managerName')} 
            />
            </div>

            <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input 
            id="email" 
            type="email" 
            {...register('email')} 
            />
            </div>

            <div className="space-y-2">
            <Label htmlFor="phone">Seu telefone</Label>
            <Input 
            id="phone" 
            type="tel" 
            {...register('phone')} 
            />
            </div>



            <Button disabled={isSubmitting} className="w-full" type="submit" >
                Finalizar cadastro
                </Button>

                <p className="px-6 text-center text-sm leading-relaxed text-muted-foregroud">
                    Ao continuar, você concorda com nossos {' '}
                     <a className="underline underline-offset-4" href=''>
                        Termos de serviços
                        </a> {' '}
                      e {' '}
                       <a className="underline underline-offset-4" href=''>
                        política de privacidade.
                        </a>
                </p>

            </form>
            </div>
        </div>
    </>
    )
}