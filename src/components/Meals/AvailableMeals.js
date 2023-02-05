import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import california from '../../assets/california1.jpg';
import salmon from '../../assets/salmon.jpg';
import tuna from '../../assets/tuna.jpg';
import veggie from '../../assets/veggie.jpg';

const DUMMY_MEALS = [
  {
    id: 'm1',
    img: california,
    name: 'California Rolls - 6pcs',
    description: 'Crab, avocado, and cucumber',
    price: 11.99,
  },
  {
    id: 'm2',
    img: salmon,
    name: 'Salmon Rolls - 6pcs',
    description: 'Salmon, avocado, and cucumber',
    price: 12.99,
  },
  {
    id: 'm3',
    img: tuna,
    name: 'Tuna Rolls - 6pcs',
    description: 'Tuna, avocado, and cucumber',
    price: 13.99,
  },
  {
    id: 'm4',
    img: veggie,
    name: 'Veggie Rolls - 6pcs',
    description: 'Carrot, avocado, and cucumber',
    price: 9.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      key={meal.id} 
      id={meal.id}
      img={meal.img}
      name={meal.name} 
      description={meal.description} 
      price={meal.price} 
    />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;