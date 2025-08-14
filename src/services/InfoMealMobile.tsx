import { useState } from "react";

type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
};

export default function InfoMealMobile() {
    const [mealName, setMealName] = useState<string>("");
    const [meal, setMeal] = useState<Meal | null>(null);

    const fetchMeal = async () => {
        if (!mealName.trim()) return;
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
            );
            const data = await response.json();
            setMeal(data.meals ? data.meals[0] : null);
        } catch (error) {
            console.error("Failed to fetch meal:", error);
            setMeal(null);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="p-4 font-sans max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Meal Info Viewer</h1>

    {/* Search Bar */}
    <div className="flex flex-col sm:flex-row gap-2 mb-6">
    <input
        type="text"
    placeholder="Enter meal name..."
    value={mealName}
    onChange={(e) => setMealName(e.target.value)}
    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <button
        onClick={fetchMeal}
    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
        Search
        </button>
        </div>

    {/* Meal Info */}
    {meal && (
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
            <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-lg object-cover"
        />
        <p>
            <span className="font-bold">Category:</span> {meal.strCategory}
    </p>
    <p>
    <span className="font-bold">Area:</span> {meal.strArea}
    </p>
    <div>
    <p className="font-bold mb-1">Instructions:</p>
    <p className="text-sm text-gray-700">{meal.strInstructions}</p>
        </div>
        <button
        onClick={handlePrint}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
            🖨️ Print Meal Info
    </button>
    </div>
    )}
    </div>
);
}
