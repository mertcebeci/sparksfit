window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const calories = urlParams.get('calories');
    const program = urlParams.get('program');
    const diet = JSON.parse(decodeURIComponent(urlParams.get('diet')));

    document.getElementById('name').innerText = `Merhaba ${name},`;
    document.getElementById('calories').innerText = `Günlük Kalori İhtiyacınız: ${calories} kcal`;
    document.getElementById('program').innerText = `Önerilen Program: ${program}`;
    
    const dietContainer = document.getElementById('diet');
    diet.forEach(meal => {
        const mealSection = document.createElement('section');
        mealSection.className = 'meal-section';
        mealSection.innerHTML = `<h3>${meal.meal}</h3>`;
        
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Gıda</th>
                    <th>Miktar</th>
                    <th>Kalori</th>
                    <th>Protein (g)</th>
                    <th>Karbonhidrat (g)</th>
                    <th>Yağ (g)</th>
                </tr>
            </thead>
            <tbody>
                ${meal.items.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.amount}</td>
                    <td>${item.calories}</td>
                    <td>${item.protein}</td>
                    <td>${item.carbs}</td>
                    <td>${item.fat}</td>
                </tr>
                `).join('')}
            </tbody>
        `;
        mealSection.appendChild(table);
        dietContainer.appendChild(mealSection);
    });
}
