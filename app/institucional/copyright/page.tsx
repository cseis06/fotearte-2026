import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alquiler de Cámaras y Equipos Fotográficos',
  description: 'Alquilá cámaras profesionales Canon, Sony, Nikon y más en Paraguay. Equipos de fotografía y video por día, fin de semana o semana. Lentes, luces, estabilizadores. Entrega en Asunción y todo el país.',
}

export default async function CamerasPage() {

  return (
    <>

      <main className="min-h-screen bg-black">
        {/* Hero Section con imagen de fondo */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <h1>
            Aviso de Derechos de Autor
          </h1>
          <p>
            A menos que se indique expresamente lo contrario, Fotearte reclama los derechos de autor de todo el material contenido en este sitio web.
            Usted puede descargar, visualizar, imprimir y reproducir este material en forma inalterada para su uso personal, pero en ningún caso con fines comerciales.
            Fotearte se reserva el derecho de revocar dicha autorización en cualquier momento. Aparte de este permiso y de los usos permitidos por la legislación vigente en materia de propiedad intelectual, todos los demás derechos están reservados.
            Las solicitudes de nuevas autorizaciones, incluyendo aquellas destinadas a utilizar el material de este sitio web con fines comerciales, deberán dirigirse a nuestro equipo a través del formulario de contacto.
          </p>
        </section>
      </main>
    </>
  )
}