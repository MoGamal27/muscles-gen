const calculateBMR = (age, gender, weight, height) => {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return 0;
};

module.exports = calculateBMR