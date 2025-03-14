"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Link from 'next/link';
import LoadingScreen from '../loading-screen';

const LoginFormSchema = z.object({
    email: z.string().email("Email invalide"),
    password: z.string().min(1, "Mot de passe requis"),
  });

  type LoginFormInputs = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<LoginFormInputs>({
        resolver: zodResolver(LoginFormSchema),
      });

      const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
          const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
          });

          if (result?.error) {
            setIsLoading(false);
            toast.error(result.error);
            return;
          }
    
          toast.success("Connexion réussie !");
          // Afficher l'écran de chargement
          setShowLoadingScreen(true);
        } catch (error) {
          toast.error(`Une erreur est survenue lors de la connexion., ${error}`);
        }
      };

      
  return (
    <>
    {showLoadingScreen ? (
        <LoadingScreen />
      ) : (
    <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Email</Label>
        <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Label htmlFor="password">Mot de passe</Label>
        <Input
            id="password"
            type="password"
            placeholder="Mot de passe"
            {...register("password")}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <div className="flex flex-col justify-center items-center gap-2 text-base">
            <p>Vous n’avez pas de compte ? </p>
            <Link className="font-bold" href="/auth/signup">Créez un compte</Link>
        </div>

        <Button 
            className='w-full font-medium bg-decathlon-blue py-6 px-3 rounded-full text-white' 
            type='submit'
            disabled={isSubmitting}
        >
        Se connecter
        </Button>
    </form>)}
    </>
  )
}

export default LoginForm