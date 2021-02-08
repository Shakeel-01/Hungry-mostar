const searchMeals=()=> {
    const name = document.getElementById('searchInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data => displayMeals(data.meals));

}

const displayMeals= meals =>{
    const mealContainer= document.getElementById('meal-container');
    mealContainer.innerHTML='';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className= 'meal';
        mealDiv.innerHTML= `
        <img onclick="mealDetails('${meal.strMeal}')" src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>`
        mealContainer.appendChild(mealDiv);
    });
}

const mealDetails = name =>{
       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      fetch(url)
      .then(res=>res.json())
      .then(data => mealInfo(data.meals[0]));
}
const mealInfo= meals =>{
    const mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML=`
    <img src="${meals.strMealThumb}">
    <h3>${meals.strMeal}</h3>
    <p>Ingredients:<p>
    <ul>
    <li>${meals.strIngredient1}</li>
    <li>${meals.strIngredient2}</li>
    <li>${meals.strIngredient3}</li>
    <li>${meals.strIngredient4}</li>
    <li>${meals.strIngredient5}</li>
    <li>${meals.strIngredient6}</li>
    <li>${meals.strIngredient7}</li>
    <li>${meals.strIngredient8}</li>
    <li>${meals.strIngredient9}</li>
    <li>${meals.strIngredient10}</li>
    </ul>`
    

}