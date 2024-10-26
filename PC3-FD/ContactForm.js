function ContactForm() {
    return (
      <form className="max-w-lg mx-auto bg-white p-8 shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input type="text" className="w-full p-2 border" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input type="email" className="w-full p-2 border" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea className="w-full p-2 border"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">Enviar</button>
      </form>
    );
  }
  
  export default ContactForm;
  