import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {  CircleDollarSign } from "lucide-react";

export default function Sales() {
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">

                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Overview vendas
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4"/>

                </div>
            </CardHeader>

            <CardDescription className="px-5">
                Novos clientes nas últimas 24 horas
            </CardDescription>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/israel-cfilho.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="text-sm sm:text-base font-semibold">
                        <p>Israel Filho</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">israel@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/israel-cfilho.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="text-sm sm:text-base font-semibold">
                        <p>Israel Filho</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">israel@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/israel-cfilho.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="text-sm sm:text-base font-semibold">
                        <p>Israel Filho</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">israel@teste.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}