import Form from "@/app/ui/form/form";
import StudioInfos from "./studio-infos";

export default function Contact() {
  return (
    <section className="p-6 min-sm:p-12 min-sm:pb-24 bg-background">
      <div className="max-w-[1280px] m-auto">
        <h2 className="fontHeadline">Contate-nos</h2>
        <div className="min-lg:grid min-lg:grid-cols-2">
          <div>
            <div className="mt-3 space-y-1 min-sm:space-y-2 min-sm:mt-6">
              <h3 className="fontDisplay uppercase">
                <span className="fontDisplayItalic">Vamos</span>
                <br />
                Conversar
              </h3>
              <p className="fontBody">
                Alguma dúvida? Entre em contato preenchendo nosso formulário.
              </p>
            </div>

            <StudioInfos className="mt-8 min-sm:mt-15" />
          </div>

          <Form className="w-full mt-12 grid gap-y-5 fontBody min-sm:grid-cols-2 min-sm:gap-x-5 min-lg:mt-6 min-lg:gap-y-16 min-lg:self-start" />
        </div>
      </div>
    </section>
  );
}
