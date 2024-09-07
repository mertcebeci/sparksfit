function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

function createProgram(goal, bmr) {
    let calories;
    if (goal === 'zayıf') {
        calories = bmr - 500; // Kilo vermek için kalori açığı
    } else {
        calories = bmr; // Kilo koruma için bazal metabolizma
    }

    const program = `Günlük ${calories} kcal tüketmelisiniz.`;

    const diet = {
        fit: [
            { meal: 'Kahvaltı', items: [
                { name: 'Tam buğday ekmeği', amount: '2 dilim', calories: 140, protein: 6, carbs: 24, fat: 2, alternatives: ['Çörek otu ekmeği', 'Yulaf ezmesi'] },
                { name: 'Yumurta', amount: '2 adet', calories: 140, protein: 12, carbs: 1, fat: 10, alternatives: ['Peynir', 'Yoğurt'] },
                { name: 'Yeşil çay', amount: '1 fincan', calories: 0, protein: 0, carbs: 0, fat: 0 }
            ]},
            { meal: 'Ara Öğün', items: [
                { name: 'Elma', amount: '1 adet', calories: 95, protein: 0.5, carbs: 25, fat: 0.3, alternatives: ['Portakal', 'Armut'] },
                { name: 'Badem', amount: '10 adet', calories: 70, protein: 2.5, carbs: 2.5, fat: 6, alternatives: ['Ceviz', 'Fındık'] }
            ]},
            { meal: 'Öğle', items: [
                { name: 'Tavuk göğsü', amount: '150 gram', calories: 165, protein: 31, carbs: 0, fat: 3.6, alternatives: ['Hindi göğsü', 'Tofu'] },
                { name: 'Kinoa', amount: '100 gram', calories: 120, protein: 4, carbs: 21, fat: 1.9, alternatives: ['Esmer pirinç', 'Karabuğday'] },
                { name: 'Brokoli', amount: '1 su bardağı', calories: 55, protein: 4, carbs: 11, fat: 0.5 }
            ]},
            { meal: 'Ara Öğün', items: [
                { name: 'Yoğurt', amount: '1 su bardağı', calories: 100, protein: 10, carbs: 12, fat: 0.5, alternatives: ['Süt', 'Kefir'] },
                { name: 'Yaban mersini', amount: '1/2 su bardağı', calories: 40, protein: 0.5, carbs: 10, fat: 0.5 }
            ]},
            { meal: 'Akşam', items: [
                { name: 'Somon balığı', amount: '150 gram', calories: 280, protein: 25, carbs: 0, fat: 20, alternatives: ['Ton balığı', 'Sardalya'] },
                { name: 'Tatlı patates', amount: '100 gram', calories: 90, protein: 2, carbs: 21, fat: 0.1, alternatives: ['Patates', 'Havuç'] },
                { name: 'Ispanak', amount: '1 su bardağı', calories: 7, protein: 0.9, carbs: 1, fat: 0.1 }
            ]}
        ],
        zayıf: [
            { meal: 'Kahvaltı', items: [
                { name: 'Yulaf ezmesi', amount: '1/2 su bardağı', calories: 150, protein: 5, carbs: 27, fat: 3, alternatives: ['Tam buğday ekmeği', 'Chia tohumları'] },
                { name: 'Yoğurt', amount: '1 su bardağı', calories: 100, protein: 10, carbs: 12, fat: 0.5, alternatives: ['Süt', 'Kefir'] },
                { name: 'Çilek', amount: '1/2 su bardağı', calories: 25, protein: 0.5, carbs: 6, fat: 0.2 }
            ]},
            { meal: 'Ara Öğün', items: [
                { name: 'Havuç', amount: '1 adet', calories: 25, protein: 0.5, carbs: 6, fat: 0.1, alternatives: ['Salatalık', 'Kereviz'] },
                { name: 'Ceviz', amount: '5 adet', calories: 50, protein: 1, carbs: 1, fat: 5, alternatives: ['Fındık', 'Badem'] }
            ]},
            { meal: 'Öğle', items: [
                { name: 'Hindi göğsü', amount: '150 gram', calories: 135, protein: 30, carbs: 0, fat: 1, alternatives: ['Tavuk göğsü', 'Tofu'] },
                { name: 'Karabuğday', amount: '100 gram', calories: 340, protein: 13, carbs: 71, fat: 3, alternatives: ['Esmer pirinç', 'Kinoa'] },
                { name: 'Yeşil salata', amount: '1 tabak', calories: 50, protein: 2, carbs: 10, fat: 0.5 }
            ]},
            { meal: 'Ara Öğün', items: [
                { name: 'Yunan yoğurdu', amount: '1 su bardağı', calories: 150, protein: 15, carbs: 10, fat: 0, alternatives: ['Süt', 'Kefir'] },
                { name: 'Elma', amount: '1 adet', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 }
            ]},
            { meal: 'Akşam', items: [
                { name: 'Ton balığı', amount: '150 gram', calories: 150, protein: 32, carbs: 0, fat: 1, alternatives: ['Somon balığı', 'Sardalya'] },
                { name: 'Havuç püresi', amount: '100 gram', calories: 40, protein: 1, carbs: 10, fat: 0.2, alternatives: ['Tatlı patates püresi', 'Patates püresi'] },
                { name: 'Brokoli', amount: '1 su bardağı', calories: 55, protein: 4, carbs: 11, fat: 0.5 }
            ]}
        ],
        kas: [
            { meal: 'Kahvaltı', items: [
                { name: 'Yumurta', amount: '3 adet', calories: 210, protein: 18, carbs: 1, fat: 15, alternatives: ['Peynir', 'Süt'] },
                { name: 'Tam buğday ekmeği', amount: '2 dilim', calories: 140, protein: 6, carbs: 24, fat: 2, alternatives: ['Çörek otu ekmeği', 'Yulaf ezmesi'] },
                { name: 'Avokado', amount: '1/2 adet', calories: 120, protein: 1.5, carbs: 6, fat: 11 }
            ]},
            { meal: 'Ara Öğün', items: [
                { name: 'Kuru üzüm', amount: '1/4 su bardağı', calories: 100, protein: 1, carbs: 27, fat: 0, alternatives: ['Kuru kayısı', 'Elma'] },
                { name: 'Badem', amount: '10 adet', calories: 70, protein: 2.5, carbs: 2.5, fat: 6, alternatives: ['Ceviz', 'Fındık'] }
            ]},
            { meal: 'Öğle', items: [
                { name: 'Tavuk göğsü', amount: '200 gram', calories: 220, protein: 42, carbs: 0, fat: 5, alternatives: ['Hindi göğsü', 'Tofu'] },
                { name: 'Kinoa', amount: '150 gram', calories: 180, protein: 6, carbs: 30, fat: 2.5, alternatives: ['Esmer pirinç', 'Karabuğday'] },
                { name: 'Ispanak', amount: '1 su bardağı', calories: 7, protein: 0.9, carbs: 1, fat: 0.1 }
            ]},
            { meal: 'Ara Öğün', items: [
                { name: 'Protein shake', amount: '1 porsiyon', calories: 200, protein: 20, carbs: 10, fat: 2, alternatives: ['Yunan yoğurdu', 'Süt'] },
                { name: 'Muz', amount: '1 adet', calories: 105, protein: 1.3, carbs: 27, fat: 0.3 }
            ]},
            { meal: 'Akşam', items: [
                { name: 'Sığır eti', amount: '200 gram', calories: 250, protein: 26, carbs: 0, fat: 15, alternatives: ['Tavuk göğsü', 'Somon balığı'] },
                { name: 'Tatlı patates', amount: '150 gram', calories: 135, protein: 3, carbs: 31, fat: 0.1, alternatives: ['Patates', 'Havuç'] },
                { name: 'Brokoli', amount: '1 su bardağı', calories: 55, protein: 4, carbs: 11, fat: 0.5 }
            ]}
        ]
    };

    return { calories, program, diet: diet[goal] };
}


function generateProgram() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const goal = document.getElementById('goal').value;

    const bmr = calculateBMR(weight, height, age, gender);
    const { calories, program, diet } = createProgram(goal, bmr);

    const dietString = encodeURIComponent(JSON.stringify(diet));
    const url = `r.html?name=${encodeURIComponent(name)}&calories=${calories}&program=${encodeURIComponent(program)}&diet=${dietString}`;
    
    window.location.href = url;
}
function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const gender = document.getElementById("gender").value;
    const goal = document.getElementById("goal").value;
    const errorMessage = document.getElementById("error-message");

    if (!name || !age || !weight || !height || !gender || !goal) {
        errorMessage.textContent = "Lütfen tüm alanları doldurun.";
    } else {
        errorMessage.textContent = ""; // Hata mesajını temizle
        generateProgram(); // Eğer her şey doğruysa, program oluşturma fonksiyonunu çalıştır
    }
}