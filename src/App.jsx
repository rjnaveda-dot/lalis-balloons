import React from 'react'
import photo1 from './assets/photo_1.jpg'
import photo2 from './assets/photo_2.jpg'
import photo3 from './assets/photo_3.jpg'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-300 to-pink-600 flex items-center justify-center text-white font-semibold">LB</div>
            <div>
              <h1 className="text-lg font-semibold">Lali’s Balloons &amp; Designs</h1>
              <p className="text-xs text-gray-500">Tu evento soñado cobra vida con nuestros globos, flores y diseños</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#servicios" className="hover:underline">Servicios</a>
            <a href="#galeria" className="hover:underline">Galería</a>
            <a href="#sobre" className="hover:underline">Sobre nosotros</a>
            <a href="#contacto" className="bg-pink-600 text-white px-4 py-2 rounded-md shadow">Contáctanos</a>
          </nav>

          <a
            href="https://wa.me/573187940794"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-green-500 text-white px-3 py-2 rounded-md shadow"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-pink-50">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-pink-800">Tu evento soñado cobra vida con nuestros globos, flores y diseños</h2>
            <p className="mt-6 text-gray-600 max-w-lg">Ofrecemos decoración con globos, arreglos florales, manualidades personalizadas, diseño de eventos y servicios de sublimación para empresas y particulares.</p>

            <div className="mt-8 flex gap-4">
              <a href="#servicios" className="px-6 py-3 bg-pink-600 text-white rounded-md shadow">Ver servicios</a>
              <a href="#contacto" className="px-6 py-3 bg-white border border-pink-200 rounded-md">Contáctanos</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Tel:</strong> 318-794-0794 | 318-451-8500 | 318-319-5678 <br />
              <strong>Email:</strong> amjimenezg@gmail.com · rjnaveda@gmail.com
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <img src={photo1} alt="Decoración con globos y flores" className="w-full object-cover h-72 md:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-serif text-center mb-8">Nuestros Servicios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          <div className="p-6 bg-white rounded-lg shadow text-center">
            <div className="text-pink-500 text-3xl">🎈</div>
            <h4 className="mt-4 font-semibold">Decoración con globos</h4>
            <p className="mt-2 text-sm text-gray-500">Arcos, guirnaldas, columnas, photo booths y decoración a medida.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow text-center">
            <div className="text-pink-500 text-3xl">🌸</div>
            <h4 className="mt-4 font-semibold">Arreglos florales</h4>
            <p className="mt-2 text-sm text-gray-500">Centros de mesa, arreglos de ceremonia y combinaciones frescas y elegantes.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow text-center">
            <div className="text-pink-500 text-3xl">✂️</div>
            <h4 className="mt-4 font-semibold">Manualidades personalizadas</h4>
            <p className="mt-2 text-sm text-gray-500">Detalles únicos para eventos: invitaciones, recuerdos y decoraciones artesanales.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow text-center">
            <div className="text-pink-500 text-3xl">💡</div>
            <h4 className="mt-4 font-semibold">Diseño de eventos</h4>
            <p className="mt-2 text-sm text-gray-500">Planificación y conceptualización para que todo luzca perfecto.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow text-center">
            <div className="text-pink-500 text-3xl">☕</div>
            <h4 className="mt-4 font-semibold">Sublimación y personalización</h4>
            <p className="mt-2 text-sm text-gray-500">Tazas, tumblers, franelas, cintas, llaveros y regalos corporativos.</p>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="bg-pink-50 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-serif text-center mb-6">Galería</h3>
          <p className="text-center text-gray-600 mb-8">Explora nuestra galería para ver proyectos que hemos realizado</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={photo1} alt="Galería 1" className="w-full h-64 object-cover rounded-lg shadow" />
            <img src={photo2} alt="Galería 2" className="w-full h-64 object-cover rounded-lg shadow" />
            <img src={photo3} alt="Galería 3" className="w-full h-64 object-cover rounded-lg shadow" />
            <img src={photo2} alt="Galería 4" className="w-full h-64 object-cover rounded-lg shadow" />
            <img src={photo3} alt="Galería 5" className="w-full h-64 object-cover rounded-lg shadow" />
            <img src={photo1} alt="Galería 6" className="w-full h-64 object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section id="sobre" className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-serif mb-4">Sobre nosotros</h3>
          <p className="text-gray-600">Lali’s Balloons &amp; Designs nace de la pasión por crear recuerdos inolvidables. Combinamos creatividad, técnica y materiales de calidad para diseñar ambientes que emocionan. Trabajamos tanto con clientes particulares como con empresas que buscan productos personalizados.</p>

          <ul className="mt-6 text-sm text-gray-600 space-y-2">
            <li>• Atención personalizada</li>
            <li>• Materiales de primera calidad</li>
            <li>• Entregas y montajes profesionales</li>
          </ul>
        </div>

        <div id="contacto" className="bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-serif mb-4">Contacto</h3>
          <p className="text-sm text-gray-600 mb-4">Escríbenos y te responderemos a la brevedad. También puedes enviarnos un mensaje por WhatsApp.</p>

          <form
            action="https://formsubmit.co/amjimenezg@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* FormSubmit hidden fields */}
            <input type="hidden" name="_subject" value="Nuevo mensaje desde sitio - Lali's Balloons" />
            <input type="hidden" name="_cc" value="rjnaveda@gmail.com" />
            <input type="hidden" name="_autoresponse" value="Gracias por contactarnos. Nos comunicaremos pronto." />

            <div>
              <label className="block text-sm text-gray-700">Nombre</label>
              <input type="text" name="name" required className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Teléfono</label>
              <input type="tel" name="phone" className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Correo</label>
              <input type="email" name="email" required className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Mensaje</label>
              <textarea name="message" rows={4} required className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>

            <div className="flex gap-3 items-center">
              <button type="submit" className="px-5 py-3 bg-pink-600 text-white rounded-md">Enviar mensaje</button>

              <a
                href="https://wa.me/573187940794?text=Hola%20Lali%2C%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-3 border rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.112.55 4.15 1.59 5.93L0 24l6.36-1.66A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.14-3.48-8.52zM12 21.75c-2.05 0-3.93-.62-5.53-1.68l-.4-.25-3.78.99.99-3.69-.26-.39A9.75 9.75 0 1 1 21.75 12 9.74 9.74 0 0 1 12 21.75z"/></svg>
                WhatsApp
              </a>
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-600">
            <p><strong>Tel:</strong> 318-794-0794 · 318-451-8500 · 318-319-5678</p>
            <p className="mt-1"><strong>Email:</strong> amjimenezg@gmail.com · rjnaveda@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-8 mt-8">
        <div className="container mx-auto px-6 text-center text-gray-700">
          <div className="mb-4">
            <strong>Lali’s Balloons &amp; Designs</strong>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Lali’s Balloons &amp; Designs. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
