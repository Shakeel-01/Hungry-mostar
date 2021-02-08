fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayMeal(data));

const displayMeal = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(Meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
     <img src="${MealThumb.str}">;
     <h3>${Meal.str}</h3>;
    `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

}