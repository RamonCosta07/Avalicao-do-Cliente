import { useState } from "react";
import styles from "./Rating-card.module.css";

const RatingCard = () => {
  const [rating, setRating] = useState<number>();
  const [submited, setSubmited] = useState<boolean>(false);

  const handleRating = (rating: number) => {
    setRating(rating);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) {
      return;
    }
    setSubmited(true);
  };

  if (submited) {
    return (
      <div className={styles.card} style={{alignItems: 'center'}}>
        <div>
          <img src="./illustration-thank-you.svg" alt="Agradecimento" />
        </div>
        <div className={styles.pill}>
          <p>Você avaliou com a nota {rating} de 5</p>
        </div>
        <h1 className={styles.title}>Muito Obrigado!</h1>
        <p className={styles.description} style={{textAlign: 'center'}}>Somos muito gratos pela sua avaliação, nossa empresa valoriza a opinião de nossos consumidores</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div>
        <img className={styles.star} src="/icon-star.svg" alt="Estrela" />
      </div>
      <h1 className={styles.title}>Poderia nos avaliar?</h1>
      <p className={styles.description}>
        Por favor nos avalie com uma nota em relação a sua experiência, isso nos
        ajudará bastante a evoluir
      </p>
      <div className={styles.buttonGrade}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            key={rating}
            onClick={() => handleRating(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <button type="submit" className={styles.submit}>
        Enviar
      </button>
    </form>
  );
};

export default RatingCard;
