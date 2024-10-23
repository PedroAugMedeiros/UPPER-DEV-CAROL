const Text = ({ images, speed = 5000 }) => {
  return (
    <div className="flex inner">
      <div className="flex wrapper gap-2">
        <section className="sectionText" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="" key={id}>
              <h1 className="w-[150%] stretch textSlider">{image}</h1>
            </div>
          ))}
        </section>
        <section className="sectionText" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="" key={id}>
              <h1 className="textSlider">{image}</h1>
            </div>
          ))}
        </section>
        <section className="sectionText" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="" key={id}>
              <h1 className="textSlider">{image}</h1>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Text };
