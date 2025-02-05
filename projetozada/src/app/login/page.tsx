'use client';

import Button from "@/components/Button";
import { useState } from "react";

export default function salve() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserName = (value: string) => {
        setUserName(value);
    }

    const handlePassword =(value: string) => {
        setPassword(value);
    }

    const handleClick = () => {
        if(password.length < 6) {
            alert("A senha deve ter no minimo 6 caracteres");
            return;
        }
        alert("A senha " + password + " já esta sendo usada pelo usuario lipe");
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-gray-300 p-20 flex flex-col items-center rounded-lg">
                <h1 className="text-3xl">Cadastro</h1>
                <div className="flex flex-col gap-4 mt-10">
                    <label className="text-start">Usuário</label>
                    <input type="text" placeholder="Usuário" className="p-2" onChange={e => handleUserName(e.target.value)}/>
                    <label >Senha</label>
                    <input type="password" placeholder="Senha" className="p-2" onChange={e => handlePassword(e.target.value)}/>
                    <Button text="Enviar" onClick={handleClick} className="mt-4"/>
                </div>
            </div>
        </div>
    );
}