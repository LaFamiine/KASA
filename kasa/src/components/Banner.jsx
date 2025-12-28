import '../style/Banner.css';

function Banner({ imageUrl, title, className = '' }) {
  const style = imageUrl 
    ? { background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl}) center/cover` }
    : {};

  return (
    <div className={`banner ${className}`} style={style}>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;