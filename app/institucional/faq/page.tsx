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
            
            Preguntas Frecuentes
          </h1>
          <p>
            Sobre nuestros cursos presenciales

            ¿Qué tipo de cursos ofrece Fotearte?
            Fotearte ofrece cursos de fotografía con enfoque práctico y presencial, diseñados para todos los niveles: desde principiantes hasta fotógrafos avanzados. Cada curso combina teoría y práctica para desarrollar habilidades técnicas y creativas.

            ¿Dónde se dictan las clases?
            Todas las clases son presenciales en nuestras instalaciones, donde contarás con espacio de estudio, equipo fotográfico y apoyo directo de nuestros profesores.

            ¿Qué duración tienen los cursos?
            La duración varía según el curso o taller. Algunos cursos básicos tienen una duración de varias semanas con clases semanales, y los cursos más completos pueden extenderse varios meses. Para conocer fechas y horarios específicos, revisa nuestro calendario académico o contáctanos.

            ¿Qué se aprende en las clases presenciales?
            En nuestras clases presenciales aprenderás desde los fundamentos de la cámara y la exposición hasta técnicas avanzadas de composición, iluminación, retrato y edición, con ejercicios prácticos en cada sesión.

            Inscripción y requisitos

            ¿Necesito experiencia previa en fotografía?
            No, nuestros cursos están diseñados tanto para quienes nunca han tomado una cámara en la mano como para quienes ya tienen experiencia y desean profundizar sus conocimientos.

            ¿Qué equipo debo traer?
            Se recomienda traer tu propia cámara (réflex, mirrorless o cámara con modo manual). También puedes practicar con cámaras de escuela cuando sea necesario, pero lo ideal es usar tu equipo personal para desarrollar tu estilo.

            ¿Cómo me inscribo y cuándo abren las inscripciones?
            Las inscripciones se realizan directamente en nuestra escuela o a través del formulario de contacto en línea. Tenemos varias fechas de inicio durante el año para que puedas elegir la que mejor se adapte a tu tiempo.

            Metodología y clases

            ¿Las clases son teóricas o prácticas?
            Son una combinación de teoría y práctica. Cada clase incluye explicación de conceptos junto con ejercicios y salidas fotográficas para que puedas aplicar inmediatamente lo aprendido.

            ¿Qué pasa si me pierdo una clase?
            Depende del curso, pero en muchos casos ofrecemos recuperación con otro grupo o material de apoyo para que no pierdas el contenido.

            ¿Voy a recibir retroalimentación personalizada?
            Sí, una parte importante de nuestros cursos es la retroalimentación directa de los profesores sobre tus trabajos y ejercicios.

            Certificación y beneficios

            ¿Recibo un certificado?
            Al finalizar y aprobar tu curso, recibirás un certificado de participación que avala las competencias adquiridas durante las clases.

            ¿Puedo usar lo aprendido para trabajar profesionalmente?
            Claro, la metodología práctica y personalizada te prepara para aplicar tus conocimientos en proyectos personales o incluso para comenzar a trabajar como fotógrafo.


            Si tienes otra duda que no está aquí, contáctanos directamente y te responderemos lo antes posible.
          </p>
        </section>
      </main>
    </>
  )
}