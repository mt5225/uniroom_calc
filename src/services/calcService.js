/*eslint no-unused-expressions: [2, { allowTernary: true }]*/
const calcService = (answers) => {
    let total = 0
    //scan all the ansers
    for (var question in answers) {
        if (answers.hasOwnProperty(question) && answers[question].length > 1) {
            const answer = answers[question]
            switch (question) {
                case 'productMode':
                    answer === '自然产' ? total += 6000 : total += 10000
                    break;
                case 'hospitalClass':
                    switch (answer) {
                        case '高评分':
                            total += 1000
                            break;
                        case '中等评分':
                            total += 500
                            break;
                        case '低评分':
                            total += 200
                            break;
                        default:
                    }
                    break;
                case 'doctorClass':
                    switch (answer) {
                        case '收费较高':
                            total += 900
                            break;
                        case '收费中等':
                            total += 300
                            break;
                        case '收费较低':
                            total += 100
                            break;
                        default:
                    }
                    break;
                case 'houseClass':
                    switch (answer) {
                        case 'type1':
                            total += 9000
                            break;
                        case 'type2':
                            total += 3000
                            break;
                        case 'type3':
                            total += 1000
                            break;
                        default:
                    }
                    break;
                case 'careMode':
                    switch (answer) {
                        case 'yes':
                            total += 2500
                            break;
                        default:
                    }
                    break;
                default:
            }
        }
    }

    //calculate the meal fee
    if (/^\d+$/.test(answers['numOfPeople']) && /^\d+$/.test(answers['numOfDays'])) {
        const p1 = parseInt(answers['numOfPeople'], 10)
        const p2 = parseInt(answers['numOfDays'], 10)
        total += p1 * p2 * 200
    }

    if (/^\d+$/.test(answers['traffic'])) {
        total += parseInt(answers['traffic'], 10)
    }

    if (/^\d+$/.test(answers['misc'])) {
        total += parseInt(answers['misc'], 10)
    }

    if (/^\d+$/.test(answers['numOfBaby'])) {
        total += parseInt(answers['numOfBaby'], 10) * 1200
    }
    return total
}

export default calcService