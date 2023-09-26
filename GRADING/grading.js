function Grade(mark) {
    if (mark >= 80 && mark <= 100) {
        return 'A';
    } else if (mark >= 60 && mark < 79) {
        return 'B';
    } else if (mark >= 50 && mark < 69) {
        return 'C';
    } else if (mark >= 40 && mark < 49) {
        return 'D';
    } else if (mark >= 0 && mark < 39) {
        return 'E';
    } else {
        return 'Invalid input';
    }
}
module.exports = Grade;

