import styles from "./weatherMainInfo.module.css";
export default function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.containerElementsForm}>
        <div className={styles.information}>
            <img
            className={styles.imageClime}
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt="condition"
            />
            <h1 className={styles.title}>{weather?.location.name}</h1>
            <h3 className={styles.country} >{weather?.location.country}</h3>
            <p className={styles.text}><b>Region: </b>{weather?.location.region}</p>
            <p className={styles.text}><b>Clime: </b>{weather?.current.condition.text}</p>
            <p className={styles.text}><b>Temperature: </b>{weather?.current.temp_c}°</p>
        </div>
        <div className={styles.image}>
        <iframe
          title={weather?.current.name}
          src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2036491.0754688606!2d${weather?.location.lon}!3d${weather?.location.lat}4!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1664205083485!5m2!1ses!2sco`}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>
  );
}
