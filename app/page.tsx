import type React from "react"
import Link from "next/link"
import { CheckCircle, Code, Database, Globe, LifeBuoy, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Componente de características optimizado para React 19
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Icon className="h-8 w-8 text-primary" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

// Componente de plan de precios optimizado para React 19
function PricingCard({
  title,
  description,
  price,
  features,
  isRecommended = false,
}: {
  title: string
  description: string
  price: string
  features: string[]
  isRecommended?: boolean
}) {
  return (
    <Card className={isRecommended ? "border-primary" : ""}>
      <CardHeader>
        {isRecommended && <div className="text-center text-sm font-medium text-primary">Recomendado</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{price}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">por mes</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {isRecommended ? "Comenzar" : title === "Empresarial" ? "Contactar" : "Comenzar"}
        </Button>
      </CardFooter>
    </Card>
  )
}

// Componente de testimonio optimizado para React 19
function TestimonialCard({
  name,
  position,
  company,
  testimonial,
}: {
  name: string
  position: string
  company: string
  testimonial: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img
            alt={`Foto de ${name}`}
            className="rounded-full"
            height="40"
            src="/placeholder.svg?height=40&width=40"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="grid gap-1">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {position}, {company}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 dark:text-gray-400">"{testimonial}"</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Página principal optimizada para React 19
export default function Home() {
  // Datos para características
  const features = [
    {
      icon: Globe,
      title: "Soluciones Web",
      description: "Aplicaciones web modernas y responsivas que funcionan en cualquier dispositivo.",
    },
    {
      icon: Database,
      title: "Gestión de Datos",
      description: "Sistemas de bases de datos optimizados para el manejo eficiente de tu información.",
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Protección avanzada para tus aplicaciones y datos empresariales.",
    },
    {
      icon: LifeBuoy,
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible en todo momento para resolver cualquier incidencia.",
    },
  ]

  // Datos para planes de precios
  const pricingPlans = [
    {
      title: "Básico",
      description: "Para pequeñas empresas",
      price: "$99",
      features: ["1 proyecto", "5 usuarios", "Soporte por email"],
      isRecommended: false,
    },
    {
      title: "Profesional",
      description: "Para empresas en crecimiento",
      price: "$199",
      features: ["5 proyectos", "20 usuarios", "Soporte prioritario", "Análisis avanzados"],
      isRecommended: true,
    },
    {
      title: "Empresarial",
      description: "Para grandes organizaciones",
      price: "$399",
      features: [
        "Proyectos ilimitados",
        "Usuarios ilimitados",
        "Soporte 24/7",
        "Personalización completa",
        "API dedicada",
      ],
      isRecommended: false,
    },
  ]

  // Datos para testimonios
  const testimonials = [
    {
      name: "María González",
      position: "CEO",
      company: "Innovatech",
      testimonial:
        "La implementación del software de gestión ha transformado completamente nuestra operación diaria. Ahora somos más eficientes y podemos atender mejor a nuestros clientes.",
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de TI",
      company: "Grupo Empresarial",
      testimonial:
        "El equipo de soporte es excepcional. Siempre están disponibles para resolver cualquier duda y las actualizaciones del sistema son constantes y valiosas.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold">TechSolve</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Características
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Precios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Soluciones de Software para tu Negocio
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Transformamos tus ideas en soluciones digitales potentes. Desarrollo a medida para impulsar tu
                    crecimiento.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Solicitar Demo</Button>
                  <Button size="lg" variant="outline">
                    Conocer Más
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/placeholder.svg?height=550&width=750"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Todo lo que necesitas</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nuestras soluciones de software están diseñadas para adaptarse a tus necesidades específicas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm dark:bg-gray-900">Precios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planes para cada necesidad</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Elige el plan que mejor se adapte a tu negocio. Todos incluyen soporte técnico.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  features={plan.features}
                  isRecommended={plan.isRecommended}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros clientes</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Descubre por qué las empresas confían en nuestras soluciones de software.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm dark:bg-gray-900">Contacto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para comenzar?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a transformar tu negocio.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-4 mt-8">
              <Card>
                <CardContent className="p-6">
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="name"
                        >
                          Nombre
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="name"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="email"
                          placeholder="tu@email.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="company"
                      >
                        Empresa
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="company"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Mensaje
                      </label>
                      <textarea
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="message"
                        placeholder="¿Cómo podemos ayudarte?"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 TechSolve. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

