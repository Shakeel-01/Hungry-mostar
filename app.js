const searchMeals=()=> {
    const name = document.getElementById('searchInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data => displayMeals(data.meals));

}

const displayMeals= meals =>{
    const mealContainer= document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className= 'meal';
        mealDiv.innerHTML= `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>`
        mealContainer.appendChild(mealDiv);
    });
}