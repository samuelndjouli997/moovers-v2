"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Link from 'next/link';

const SignUpSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    password: z.string().min(1, "Mot de passe requis"),
  });

type SignUpInputs = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<SignUpInputs>({
        resolver: zodResolver(SignUpSchema),
      });

      const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
        
              const responseData = await res.json();
        
              if (!res.ok) {
                toast.error(responseData.error || "Erreur lors de l'inscription");
                return;
              }
        
              toast.success("Compte créé avec succès ! Connexion en cours...");
        
              // Connexion automatique après l'inscription
              const signInResponse = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
              });
        
              if (signInResponse?.error) {
                toast.error(signInResponse.error);
                return;
              }
        
              router.refresh();
              router.push("/dashboard");
        } catch (error) {
            toast.error(`Une erreur est survenue., ${error}`);
        }
      };

      
  return (
    <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <Label className="" htmlFor="name">Nom</Label>
        <Input
            id="name"
            type="name"
            placeholder="Nom"
            {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Label htmlFor="email">Adresse email</Label>
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
            <p>Vous avez déjà un compte ? </p>
            <Link className="font-bold" href="/auth/login">Connectez-vous</Link>
        </div>

        <Button 
            className='w-full font-medium bg-decathlon-blue py-6 px-3 rounded-full text-white' 
            type='submit'
            disabled={isSubmitting}
        >
            S&apos;inscrire
        </Button>

    </form>
  )
}

export default SignUpForm