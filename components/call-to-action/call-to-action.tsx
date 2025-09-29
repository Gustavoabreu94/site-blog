import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className=" relative py-24">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center ">
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>
          <h2 className="text-heading-xl text-gray-100 text-balance font-sans">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <Button
            asChild
            className="w-fit rounded-full hidden mt-6 md:mt-auto md:flex"
          >
            <Link href="/criar-loja">
              Criar Loja Grátris <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
