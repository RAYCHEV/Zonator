// Zone Diet Calculator JavaScript

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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add form submit event listener
    form.addEventListener('submit', handleFormSubmit);
    
    // Add input event listeners for real-time calculation
    [proteinInput, carbsInput, fibersInput, fatInput].forEach(input => {
        input.addEventListener('input', debounce(calculateIfValid, 300));
    });
    
    // Add event listener for interactive calculator
    productGramsInput.addEventListener('input', updateInteractiveBlocks);
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
        dominantIndicator.textContent = 'Моля, въведете поне една хранителна стойност за да видите резултатите.';
        return;
    }
    
    // Add dominant class
    dominantIndicator.classList.add(dominant);
    
    const dominantNames = {
        'protein': 'протеинов',
        'carbs': 'въглехидратен', 
        'fat': 'мазнинен'
    };
    
    dominantIndicator.textContent = `Този продукт е основно ${dominantNames[dominant]} източник - ${dominantGrams.toFixed(1)}g за 1 блок`;
}

// Update analysis text
function updateAnalysis() {
    if (!currentResult) return;
    
    const { dominant, dominantGrams, protein, netCarbs, fat } = currentResult;
    
    if (dominant === 'none') {
        analysisText.innerHTML = 'Моля, въведете поне една хранителна стойност за да видите резултатите.';
        return;
    }
    
    const dominantNames = {
        'protein': 'протеинов',
        'carbs': 'въглехидратен',
        'fat': 'мазнинен'
    };
    
    const dominantColors = {
        'protein': 'color: #1d4ed8; font-weight: 600;',
        'carbs': 'color: #166534; font-weight: 600;',
        'fat': 'color: #92400e; font-weight: 600;'
    };
    
    let message = `Този продукт е основно <span style="${dominantColors[dominant]}">${dominantNames[dominant]}</span> източник. `;
    message += `Един ${dominantNames[dominant]} блок се равнява на <span class="highlight">${dominantGrams.toFixed(1)}g</span> от този продукт. `;
    message += `В ${dominantGrams.toFixed(1)}g от този продукт ще получите също:`;
    
    // Calculate blocks for the dominant amount
    const dominantAmount = dominantGrams;
    const proteinBlocks = (dominantAmount * protein / 100) / PROTEIN_PER_BLOCK;
    const carbsBlocks = (dominantAmount * netCarbs / 100) / CARBS_PER_BLOCK;
    const fatBlocks = (dominantAmount * fat / 100) / FAT_PER_BLOCK_WITH_PROTEIN;
    
    const additionalBlocks = [];
    
    if (dominant !== 'protein' && proteinBlocks > 0.1) {
        additionalBlocks.push(`<span class="highlight">${proteinBlocks.toFixed(1)}</span> протеинови блока`);
    }
    
    if (dominant !== 'carbs' && carbsBlocks > 0.1) {
        additionalBlocks.push(`<span class="highlight">${carbsBlocks.toFixed(1)}</span> въглехидратни блока`);
    }
    
    if (dominant !== 'fat' && fatBlocks > 0.1) {
        additionalBlocks.push(`<span class="highlight">${fatBlocks.toFixed(1)}</span> мазнинни блока`);
    }
    
    if (additionalBlocks.length > 0) {
        message += ` ${additionalBlocks.join(', ')}.`;
    } else {
        message += ' незначителни количества от други макронутриенти.';
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