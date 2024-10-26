function AboutUs() {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold">Acerca de Nosotros</h2>
        <div className="mt-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  