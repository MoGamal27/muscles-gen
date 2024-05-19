const calculateCaloricNeeds = (bmr, activity) => {
    const activityFactors = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725,
        super_active: 1.9
    };

    const maintain = bmr * (activityFactors[activity] || 1.2);
    const weightLoss = maintain * 0.8; 
    const muscleGain = maintain * 1.1; 

    return {
        maintain: Math.round(maintain),
        weightLoss: Math.round(weightLoss),
        muscleGain: Math.round(muscleGain)
    };
};

module.exports = calculateCaloricNeeds