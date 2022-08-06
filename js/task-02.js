// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
    const nameEl = document.createElement("li");
    nameEl.textContent = ingredient;
    nameEl.classList.add("item");
    return nameEl;
});

console.log(elements);
ingredientsContainerEl.append(...elements);