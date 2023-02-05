import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Sushi, Delivered To You!</h2>
      <p>
        Choose your favorite rolls from our broad menu selection of availabilities
        and enjoy a delicious lunch or dinner at home!
      </p>
      <p>
        All meals are made with high-quality ingredients, just-in-time and
        of course by experienced React chefs!
      </p>
    </section>
  );
};

export default MealsSummary;