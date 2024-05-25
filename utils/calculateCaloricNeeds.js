const calculateCaloricNeeds = (bmr, activity) => {
    const activityFactors = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725,
        super_active: 1.9
    };

    const maintain = bmr * (activityFactors[activity] || 1.2);
    const lose = maintain * 0.8; 
    const gain= maintain * 1.1; 

    return {
        maintain: Math.round(maintain),
        lose: Math.round(lose),
        gain: Math.round(gain)
    };
};

module.exports = calculateCaloricNeeds