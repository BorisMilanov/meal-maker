import {useState} from 'react';

function InfoMeal() {
    const [mealName, setMealName] = useState('');
    const [meal, setMeal] = useState<any>(null);

    const fetchMeal = async () => {
        if (!mealName) return;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        const data = await response.json();
        setMeal(data.meals ? data.meals[0] : null);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div style={{padding: '2rem', fontFamily: 'Arial'}}>
            <h1>Meal Info Viewer</h1>
            <input
                type="text"
                placeholder="Enter meal name..."
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
            />
            <button onClick={fetchMeal}>Search</button>

            {meal && (
                <div style={{marginTop: '2rem'}}>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} width="300"/>
                    <p><strong>Category:</strong> {meal.strCategory}</p>
                    <p><strong>Area:</strong> {meal.strArea}</p>
                    <p><strong>Instructions:</strong></p>
                    <p>{meal.strInstructions}</p>
                    <button onClick={handlePrint}>🖨️ Print Meal Info</button>
                </div>
            )}
        </div>
    );

}

export default InfoMeal;