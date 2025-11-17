// Zone Diet Calculator JavaScript

// Translation system
const translations = {
    en: {
        title: 'Zone Diet Block Calculator',
        subtitle: 'Enter the nutritional values from the food label to calculate Zone Diet blocks.',
        'label.protein': 'Protein (g/100g)',
        'label.carbs': 'Carbohydrates (g/100g)',
        'label.fibers': 'Fiber (g/100g)',
        'label.fat': 'Fat (g/100g)',
        'button.calculate': 'Calculate Zone Blocks',
        blockComposition: 'Block Composition',
        'chart.protein': 'Protein:',
        'chart.carbs': 'Carbs:',
        'chart.fat': 'Fat:',
        'interactive.totalBlocks': 'Total blocks in',
        'interactive.gProduct': 'g product',
        'blocks.protein': 'Protein blocks',
        'blocks.carbs': 'Carb blocks',
        'blocks.fat': 'Fat blocks',
        'dominant.none': 'Please enter at least one nutritional value to see the results.',
        'dominant.protein': 'This product is primarily a protein source',
        'dominant.carbs': 'This product is primarily a carbohydrate source',
        'dominant.fat': 'This product is primarily a fat source',
        'dominant.forOneBlock': 'for 1 block',
        'analysis.primarily': 'This product is primarily a',
        'analysis.source': 'source.',
        'analysis.oneBlock': 'One',
        'analysis.blockEquals': 'block equals',
        'analysis.ofProduct': 'of this product.',
        'analysis.inAmount': 'In',
        'analysis.youWillAlsoGet': 'of this product you will also get:',
        'analysis.proteinBlocks': 'protein blocks',
        'analysis.carbBlocks': 'carb blocks',
        'analysis.fatBlocks': 'fat blocks',
        'analysis.negligible': 'negligible amounts of other macronutrients.',
        'nutrient.protein': 'protein',
        'nutrient.carbs': 'carbohydrate',
        'nutrient.fat': 'fat',
        'kofi.text': 'Support Us',
        'support.text': 'Please support us to develop the app for iOS and Android',
        'button.faq': 'FAQ',
        'button.calculator': 'Calculator',
        'faq.title': 'FAQ - Zone Diet Block Calculator',
        'faq.subtitle': 'Frequently asked questions about Zone Diet blocks and the calculator',
        'faq.backToCalculator': '← Back to calculator',
        'faq.q1.question': 'What is Zone Diet?',
        'faq.q1.answer': 'Zone Diet is a nutritional approach that balances proteins, carbohydrates, and fats in a 40:30:30 ratio. The system uses "blocks" as a unit of measurement to control food intake.',
        'faq.q2.question': 'What is one Zone block?',
        'faq.q2.answer': 'One Zone block contains:<ul><li>7 grams of protein</li><li>9 grams of carbohydrates (net, after subtracting fiber)</li><li>1.5 grams of fat (when consumed with protein) or 3 grams of fat (when consumed alone)</li></ul>',
        'faq.q3.question': 'How do I use the calculator?',
        'faq.q3.answer': 'Enter the nutritional values from the product label (per 100g):<ul><li>Fat (g/100g)</li><li>Carbohydrates (g/100g)</li><li>Fiber (g/100g)</li><li>Protein (g/100g)</li></ul>The calculator will automatically calculate the Zone blocks and display the results.',
        'faq.q4.question': 'Why are fibers subtracted from carbohydrates?',
        'faq.q4.answer': 'Fiber is not digested by the body as energy and does not raise blood sugar. Therefore, Zone Diet uses "net carbohydrates" - total carbohydrates minus fiber.',
        'faq.q5.question': 'What does "dominant source" mean?',
        'faq.q5.answer': 'The dominant source is the macronutrient that requires the least amount of product to get one block. This helps you understand what type of food the product is - primarily a protein, carbohydrate, or fat source.',
        'faq.q6.question': 'Can I use the calculator for different product amounts?',
        'faq.q6.answer': 'Yes! After entering the nutritional values, you can change the product amount in grams in the interactive calculator to see how many blocks you get for that specific amount.',
        'faq.q7.question': 'How many blocks should I consume per day?',
        'faq.q7.answer': 'The number of blocks depends on your gender, weight, height, activity level, and goals. Typically, women consume 11-13 blocks per day, and men consume 14-16 blocks. For accurate recommendations, consult a dietitian or Zone Diet specialist.',
        'faq.q8.question': 'Why does the calculator show that a product is "fat" when I think it\'s a carbohydrate?',
        'faq.q8.answer': 'Because the calculator calculates by blocks, not by grams:<ul><li>1 protein block = 7 g</li><li>1 carb block = 9 g</li><li>1 fat block = 3 g</li></ul>Then we compare which macronutrient has the most blocks, not the most grams.',
        'faq.q9.question': 'But Barry Sears\' book says something different. Which is correct?',
        'faq.q9.answer': 'This is where confusion often arises. Barry Sears sometimes classifies foods differently, without strictly following his own block formulas. Years change definitions, give new examples, and so on.<br><br>For example:<ul><li>In the book, the egg is a protein product</li><li>But if we calculate it by the formula, the dominant macronutrient is fat</li></ul>So there are two approaches:<br>👉 Follow the book<br>or<br>👉 Follow the formula<br><br>Both are valid — the choice is personal.',
        'faq.q10.question': 'So why is this calculator useful?',
        'faq.q10.answer': 'Because the calculator:<ul><li>calculates the real blocks</li><li>shows percentage balance between macronutrients</li><li>visualizes with scales which macronutrient dominates</li><li>gives a clearer picture than the tables in books</li></ul>In other words, the calculator shows you the true proportions and allows you to decide for yourself whether to follow the book or the formula.',
        'faq.q11.question': 'Why do I see percentages below the results?',
        'faq.q11.answer': 'They show the exact ratio between protein, carbohydrates, and fats in the product. This helps you understand:<ul><li>how "pure" the product is</li><li>how well balanced it is relative to the Zone</li><li>whether it makes sense to use it in your recipes as protein/carb/fat</li></ul>',
        'faq.q12.question': 'What if the product is balanced and there is no clearly dominant macronutrient?',
        'faq.q12.answer': 'Then the scales will show you — and you can use it more flexibly, because there is no strong bias towards any of the three macronutrients.',
        'faq.q13.question': 'What exactly should I look at?',
        'faq.q13.answer': 'The most important:<ul><li>the number of blocks</li><li>the percentage chart</li></ul>'
    },
    bg: {
        title: 'Zone Diet Block Calculator',
        subtitle: 'Въведете хранителните стойности от етикета на храната, за да изчислите Zone Diet блоковете.',
        'label.protein': 'Протеини (g/100g)',
        'label.carbs': 'Въглехидрати (g/100g)',
        'label.fibers': 'Фибри (g/100g)',
        'label.fat': 'Мазнини (g/100g)',
        'button.calculate': 'Изчисли Zone Блокове',
        blockComposition: 'Block Composition',
        'chart.protein': 'Protein:',
        'chart.carbs': 'Carbs:',
        'chart.fat': 'Fat:',
        'interactive.totalBlocks': 'Общо блокове в',
        'interactive.gProduct': 'g продукт',
        'blocks.protein': 'Протеинови блокове',
        'blocks.carbs': 'Въглехидратни блокове',
        'blocks.fat': 'Мазнинни блокове',
        'dominant.none': 'Моля, въведете поне една хранителна стойност за да видите резултатите.',
        'dominant.protein': 'Този продукт е основно протеинов източник',
        'dominant.carbs': 'Този продукт е основно въглехидратен източник',
        'dominant.fat': 'Този продукт е основно мазнинен източник',
        'dominant.forOneBlock': 'за 1 блок',
        'analysis.primarily': 'Този продукт е основно',
        'analysis.source': 'източник.',
        'analysis.oneBlock': 'Един',
        'analysis.blockEquals': 'блок се равнява на',
        'analysis.ofProduct': 'от този продукт.',
        'analysis.inAmount': 'В',
        'analysis.youWillAlsoGet': 'от този продукт ще получите също:',
        'analysis.proteinBlocks': 'протеинови блока',
        'analysis.carbBlocks': 'въглехидратни блока',
        'analysis.fatBlocks': 'мазнинни блока',
        'analysis.negligible': 'незначителни количества от други макронутриенти.',
        'nutrient.protein': 'протеинов',
        'nutrient.carbs': 'въглехидратен',
        'nutrient.fat': 'мазнинен',
        'kofi.text': 'Подкрепи ни',
        'support.text': 'Моля, подкрепи ни, за да развием приложението за iOS и Android',
        'button.faq': 'FAQ',
        'button.calculator': 'Калкулатор',
        'faq.title': 'FAQ - Zone Diet Block Calculator',
        'faq.subtitle': 'Често задавани въпроси за Zone Diet блоковете и калкулатора',
        'faq.backToCalculator': '← Назад към калкулатора',
        'faq.q1.question': 'Какво е Zone Diet?',
        'faq.q1.answer': 'Zone Diet е хранителен режим, който балансира протеините, въглехидратите и мазнините в съотношение 40:30:30. Системата използва "блокове" като мерна единица за контрол на хранителния прием.',
        'faq.q2.question': 'Какво представлява един Zone блок?',
        'faq.q2.answer': 'Един Zone блок съдържа:<ul><li>7 грама протеин</li><li>9 грама въглехидрати (нетни, след изваждане на фибрите)</li><li>1.5 грама мазнини (когато се консумира с протеин) или 3 грама мазнини (когато се консумира самостоятелно)</li></ul>',
        'faq.q3.question': 'Как да използвам калкулатора?',
        'faq.q3.answer': 'Въведете хранителните стойности от етикета на продукта (на 100g):<ul><li>Мазнини (g/100g)</li><li>Въглехидрати (g/100g)</li><li>Фибри (g/100g)</li><li>Протеини (g/100g)</li></ul>Калкулаторът автоматично ще изчисли Zone блоковете и ще покаже резултатите.',
        'faq.q4.question': 'Защо се изваждат фибрите от въглехидратите?',
        'faq.q4.answer': 'Фибрите не се усвояват от тялото като енергия и не повишават кръвната захар. Затова в Zone Diet се използват "нетни въглехидрати" - общите въглехидрати минус фибрите.',
        'faq.q5.question': 'Какво означава "доминиращ източник"?',
        'faq.q5.answer': 'Доминиращият източник е макронутриентът, който изисква най-малко количество продукт за да се получи един блок. Това ви помага да разберете какъв тип храна е продуктът - основно протеинов, въглехидратен или мазнинен източник.',
        'faq.q6.question': 'Мога ли да използвам калкулатора за различни количества продукт?',
        'faq.q6.answer': 'Да! След като въведете хранителните стойности, можете да променяте количеството продукт в грамове в интерактивния калкулатор, за да видите колко блокове получавате за конкретното количество.',
        'faq.q7.question': 'Колко блокове трябва да консумирам на ден?',
        'faq.q7.answer': 'Броят блокове зависи от вашия пол, тегло, височина, ниво на активност и цели. Обикновено жените консумират 11-13 блокове на ден, а мъжете 14-16 блокове. За точни препоръки се консултирайте с диетолог или Zone Diet специалист.',
        'faq.q8.question': 'Защо калкулаторът показва, че даден продукт е "мазнина", когато аз мисля, че е въглехидрат?',
        'faq.q8.answer': 'Защото калкулаторът изчислява не по грамове, а по блокове:<ul><li>1 блок протеин = 7 g</li><li>1 блок въглехидрат = 9 g</li><li>1 блок мазнина = 3 g</li></ul>След това сравняваме кой макронутриент има най-много блокове, а не най-много грамаж.',
        'faq.q9.question': 'Но в книгата на Барис Иърс пише друго. Кое е правилното?',
        'faq.q9.answer': 'Точно тук често идва объркването. Барис Иърс понякога класифицира храни по различен начин, без да следва строго собствените си блок-формули. Годините обръщат дефиниции, дават нови примери и така нататък.<br><br>Например:<ul><li>В книгата яйцето е протеинов продукт</li><li>Но ако го пресметнем по формулата, доминиращият макронутриент е мазнина</li></ul>Затова има два подхода:<br>👉 Да следваш книгата<br>или<br>👉 Да следваш формулата<br><br>И и двете са валидни — изборът е личен.',
        'faq.q10.question': 'И тогава защо е полезен този калкулатор?',
        'faq.q10.answer': 'Защото калкулаторът:<ul><li>изчислява реалните блокове</li><li>показва процентен баланс между макронутриентите</li><li>визуализира с скали кой макронутриент доминира</li><li>дава по-ясна картина, отколкото таблиците в книгите</li></ul>С други думи, калкулаторът ти показва истинските пропорции и ти позволява сам да решиш дали се придържаш към книгата или към формулата.',
        'faq.q11.question': 'Защо виждам проценти под резултатите?',
        'faq.q11.answer': 'Те показват точното съотношение между протеин, въглехидрати и мазнини в продукта. Това помага да разбереш:<ul><li>колко „чист" е продуктът</li><li>колко добре балансиран е спрямо Зоната</li><li>дали има смисъл да го използваш в рецептите си като протеин/въглехидрат/мазнина</li></ul>',
        'faq.q12.question': 'Ами ако продуктът е балансиран и няма ясно доминиращ макронутриент?',
        'faq.q12.answer': 'Тогава скалите ще ти го покажат — и можеш да го използваш по-гъвкаво, защото няма силен превес към някой от трите макронутриента.',
        'faq.q13.question': 'Какво точно да гледам?',
        'faq.q13.answer': 'Най-важното:<ul><li>броят блокове</li><li>процентната графика</li></ul>'
    }
};

// Current language
let currentLanguage = 'bg';

// Zone Diet constants
const PROTEIN_PER_BLOCK = 7;
const CARBS_PER_BLOCK = 9;
const FAT_PER_BLOCK_WITH_PROTEIN = 1.5;
const FAT_PER_BLOCK_STANDALONE = 3;

// Global variables to store current calculation results
let currentResult = null;

// DOM elements
const form = document.getElementById('nutrition-form');
const resultsSection = document.getElementById('results');
const dominantIndicator = document.getElementById('dominant-indicator');
const analysisText = document.getElementById('analysis-text');
const productGramsInput = document.getElementById('product-grams');

// Result display elements (removed per user request)

// Interactive blocks elements
const proteinBlocksEl = document.getElementById('protein-blocks');
const carbBlocksEl = document.getElementById('carb-blocks');
const fatBlocksEl = document.getElementById('fat-blocks');

// Chart elements
const blockChartsSection = document.getElementById('block-charts');
const proteinRatioEl = document.getElementById('protein-ratio');
const carbsRatioEl = document.getElementById('carbs-ratio');
const fatRatioEl = document.getElementById('fat-ratio');
const proteinBarEl = document.getElementById('protein-bar');
const carbsBarEl = document.getElementById('carbs-bar');
const fatBarEl = document.getElementById('fat-bar');

// Form inputs
const proteinInput = document.getElementById('protein');
const carbsInput = document.getElementById('carbs');
const fibersInput = document.getElementById('fibers');
const fatInput = document.getElementById('fat');

// Translation helper function
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Initialize Ko-fi widget
function initKofiWidget() {
    if (window.kofiWidgetOverlay) {
        kofiWidgetOverlay.draw('thexcoder', {
            type: 'floating-chat',
            'floating-chat.donateButton.text': t('kofi.text'),
            'floating-chat.donateButton.background-color': '#00b9fe',
            'floating-chat.donateButton.text-color': '#fff'
        });
        return true;
    }
    return false;
}

// Update page text based on current language
function updatePageText() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        const isHtml = element.hasAttribute('data-i18n-html');
        
        // Check if translation contains HTML tags or if explicitly marked as HTML
        if (isHtml || translation.includes('<ul>') || translation.includes('<li>') || translation.includes('<p>') || translation.includes('<br>')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update page title if it has data-i18n
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        document.title = t(titleElement.getAttribute('data-i18n'));
    }
    
    // Update Ko-fi widget text (only if widget exists)
    if (typeof initKofiWidget === 'function') {
        initKofiWidget();
    }
    
    // Re-render results if they exist
    if (currentResult) {
        displayResults();
    }
}

// Detect user language preference
function detectLanguage() {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('zoneCalculatorLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bg')) {
        return savedLanguage;
    }
    
    // Check browser language/location
    const userLang = navigator.language || navigator.userLanguage;
    
    // If browser language is Bulgarian, use Bulgarian
    if (userLang && userLang.toLowerCase().startsWith('bg')) {
        return 'bg';
    }
    
    // Default to English for all other cases
    return 'en';
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('zoneCalculatorLanguage', lang);
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update page text
    updatePageText();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const detectedLanguage = detectLanguage();
    setLanguage(detectedLanguage);
    
    // Initialize Ko-fi widget (retry if script hasn't loaded yet) - only on main page
    if (form) {
        function tryInitKofi() {
            if (!initKofiWidget()) {
                setTimeout(tryInitKofi, 100);
            }
        }
        tryInitKofi();
    }
    
    // Add language button event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Add form submit event listener (only if form exists)
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Add input event listeners for real-time calculation (only if inputs exist)
    if (proteinInput && carbsInput && fibersInput && fatInput) {
        [proteinInput, carbsInput, fibersInput, fatInput].forEach(input => {
            input.addEventListener('input', debounce(calculateIfValid, 300));
        });
    }
    
    // Add event listener for interactive calculator (only if input exists)
    if (productGramsInput) {
        productGramsInput.addEventListener('input', updateInteractiveBlocks);
    }
});

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    calculateZoneBlocks();
}

// Debounce function to prevent excessive calculations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Calculate if at least one value is entered
function calculateIfValid() {
    const protein = parseFloat(proteinInput.value) || 0;
    const carbs = parseFloat(carbsInput.value) || 0;
    const fibers = parseFloat(fibersInput.value) || 0;
    const fat = parseFloat(fatInput.value) || 0;
    
    if (protein > 0 || carbs > 0 || fat > 0) {
        calculateZoneBlocks();
    } else {
        hideResults();
    }
}

// Main calculation function
function calculateZoneBlocks() {
    // Get form values
    const protein = parseFloat(proteinInput.value) || 0;
    const carbs = parseFloat(carbsInput.value) || 0;
    const fibers = parseFloat(fibersInput.value) || 0;
    const fat = parseFloat(fatInput.value) || 0;
    
    // Calculate net carbs
    const netCarbs = carbs - fibers;
    
    // Calculate grams needed for each block type
    const proteinGramsPerBlock = protein > 0 ? (PROTEIN_PER_BLOCK * 100) / protein : Infinity;
    const carbsGramsPerBlock = netCarbs > 0 ? (CARBS_PER_BLOCK * 100) / netCarbs : Infinity;
    const fatGramsPerBlockWithProtein = fat > 0 ? (FAT_PER_BLOCK_WITH_PROTEIN * 100) / fat : Infinity;
    const fatGramsPerBlockStandalone = fat > 0 ? (FAT_PER_BLOCK_STANDALONE * 100) / fat : Infinity;
    
    // Determine dominant nutrient (the one requiring the least amount of product)
    let dominant = 'none';
    let dominantGrams = 0;
    
    if (protein > 0 || netCarbs > 0 || fat > 0) {
        const validGrams = [];
        
        if (protein > 0) {
            validGrams.push({ type: 'protein', grams: proteinGramsPerBlock });
        }
        if (netCarbs > 0) {
            validGrams.push({ type: 'carbs', grams: carbsGramsPerBlock });
        }
        if (fat > 0) {
            validGrams.push({ type: 'fat', grams: fatGramsPerBlockWithProtein });
        }
        
        if (validGrams.length > 0) {
            const dominantNutrient = validGrams.reduce((min, current) => 
                current.grams < min.grams ? current : min
            );
            dominant = dominantNutrient.type;
            dominantGrams = dominantNutrient.grams;
        }
    }
    
    // Store calculation result
    currentResult = {
        protein,
        carbs,
        fibers,
        fat,
        netCarbs,
        proteinGramsPerBlock,
        carbsGramsPerBlock,
        fatGramsPerBlockWithProtein,
        fatGramsPerBlockStandalone,
        dominant,
        dominantGrams
    };
    
    // Display results
    displayResults();
    updateInteractiveBlocks();
    updateBlockCharts();
}

// Display calculation results
function displayResults() {
    if (!currentResult) return;
    
    const {
        proteinGramsPerBlock,
        carbsGramsPerBlock,
        fatGramsPerBlockWithProtein,
        dominant,
        dominantGrams
    } = currentResult;
    
    // Show results section
    resultsSection.classList.remove('hidden');
    
    // Individual block result cards removed per user request
    
    // Update dominant indicator
    updateDominantIndicator(dominant, dominantGrams);
    
    // Update analysis
    updateAnalysis();
}

// Update dominant nutrient indicator
function updateDominantIndicator(dominant, dominantGrams) {
    // Remove existing classes
    dominantIndicator.className = 'dominant-indicator';
    
    if (dominant === 'none') {
        dominantIndicator.textContent = t('dominant.none');
        return;
    }
    
    // Add dominant class
    dominantIndicator.classList.add(dominant);
    
    const dominantText = t(`dominant.${dominant}`);
    dominantIndicator.textContent = `${dominantText} - ${dominantGrams.toFixed(1)}g ${t('dominant.forOneBlock')}`;
}

// Update analysis text
function updateAnalysis() {
    if (!currentResult) return;
    
    const { dominant, dominantGrams, protein, netCarbs, fat } = currentResult;
    
    if (dominant === 'none') {
        analysisText.innerHTML = t('dominant.none');
        return;
    }
    
    const nutrientName = t(`nutrient.${dominant}`);
    
    const dominantColors = {
        'protein': 'color: #1d4ed8; font-weight: 600;',
        'carbs': 'color: #166534; font-weight: 600;',
        'fat': 'color: #92400e; font-weight: 600;'
    };
    
    let message = `${t('analysis.primarily')} <span style="${dominantColors[dominant]}">${nutrientName}</span> ${t('analysis.source')} `;
    message += `${t('analysis.oneBlock')} ${nutrientName} ${t('analysis.blockEquals')} <span class="highlight">${dominantGrams.toFixed(1)}g</span> ${t('analysis.ofProduct')} `;
    message += `${t('analysis.inAmount')} ${dominantGrams.toFixed(1)}g ${t('analysis.youWillAlsoGet')}`;
    
    // Calculate blocks for the dominant amount
    const dominantAmount = dominantGrams;
    const proteinBlocks = (dominantAmount * protein / 100) / PROTEIN_PER_BLOCK;
    const carbsBlocks = (dominantAmount * netCarbs / 100) / CARBS_PER_BLOCK;
    const fatBlocks = (dominantAmount * fat / 100) / FAT_PER_BLOCK_WITH_PROTEIN;
    
    const additionalBlocks = [];
    
    if (dominant !== 'protein' && proteinBlocks > 0.1) {
        additionalBlocks.push(`<span class="highlight">${proteinBlocks.toFixed(1)}</span> ${t('analysis.proteinBlocks')}`);
    }
    
    if (dominant !== 'carbs' && carbsBlocks > 0.1) {
        additionalBlocks.push(`<span class="highlight">${carbsBlocks.toFixed(1)}</span> ${t('analysis.carbBlocks')}`);
    }
    
    if (dominant !== 'fat' && fatBlocks > 0.1) {
        additionalBlocks.push(`<span class="highlight">${fatBlocks.toFixed(1)}</span> ${t('analysis.fatBlocks')}`);
    }
    
    if (additionalBlocks.length > 0) {
        message += ` ${additionalBlocks.join(', ')}.`;
    } else {
        message += ` ${t('analysis.negligible')}`;
    }
    
    analysisText.innerHTML = message;
}

// Update interactive blocks calculator
function updateInteractiveBlocks() {
    if (!currentResult) return;
    
    const productGrams = parseFloat(productGramsInput.value) || 100;
    const { protein, netCarbs, fat } = currentResult;
    
    // Calculate blocks based on product grams
    const proteinBlocks = (productGrams * protein / 100) / PROTEIN_PER_BLOCK;
    const carbsBlocks = (productGrams * netCarbs / 100) / CARBS_PER_BLOCK;
    const fatBlocks = (productGrams * fat / 100) / FAT_PER_BLOCK_WITH_PROTEIN;
    
    // Update display
    proteinBlocksEl.textContent = proteinBlocks.toFixed(1);
    carbBlocksEl.textContent = carbsBlocks.toFixed(1);
    fatBlocksEl.textContent = fatBlocks.toFixed(1);
}

// Update block charts visualization
function updateBlockCharts() {
    if (!currentResult) return;
    
    const {
        protein,
        netCarbs,
        fat,
        dominantGrams
    } = currentResult;
    
    // Show charts section
    blockChartsSection.classList.remove('hidden');
    
    // Calculate how many blocks we get from the dominant amount of product
    const proteinBlocks = (dominantGrams * protein / 100) / PROTEIN_PER_BLOCK;
    const carbsBlocks = (dominantGrams * netCarbs / 100) / CARBS_PER_BLOCK;
    const fatBlocks = (dominantGrams * fat / 100) / FAT_PER_BLOCK_WITH_PROTEIN;
    
    // Calculate total blocks (this is 100%)
    const totalBlocks = proteinBlocks + carbsBlocks + fatBlocks;
    
    if (totalBlocks === 0) return;
    
    // Calculate percentage contribution of each macronutrient
    const proteinPercentage = (proteinBlocks / totalBlocks) * 100;
    const carbsPercentage = (carbsBlocks / totalBlocks) * 100;
    const fatPercentage = (fatBlocks / totalBlocks) * 100;
    
    // Update bar widths to reflect percentage contributions
    setTimeout(() => {
        proteinBarEl.style.width = `${Math.max(proteinPercentage, 2)}%`;
        carbsBarEl.style.width = `${Math.max(carbsPercentage, 2)}%`;
        fatBarEl.style.width = `${Math.max(fatPercentage, 2)}%`;
    }, 100);
    
    // Update percentage displays
    proteinRatioEl.textContent = `${proteinPercentage.toFixed(0)}%`;
    carbsRatioEl.textContent = `${carbsPercentage.toFixed(0)}%`;
    fatRatioEl.textContent = `${fatPercentage.toFixed(0)}%`;
}

// Hide results section
function hideResults() {
    resultsSection.classList.add('hidden');
    blockChartsSection.classList.add('hidden');
    currentResult = null;
}

// Utility function to format numbers
function formatNumber(num, decimals = 1) {
    if (num === Infinity || isNaN(num)) return '∞';
    return num.toFixed(decimals);
}