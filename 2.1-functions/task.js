//Задача 1
function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return {
      D,
      roots: []
    }
  } else if (D === 0) {
    let x1 = (-b / (2 * a));
    return {
      D,
      roots: [x1]
    }
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      D,
      roots: [x1, x2]
    }
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  //При отсутствии корней:
  if (result.roots.length === 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  //При одном корне:
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  //При двух корнях:
  } else if (result.roots.length === 2) {
    console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(1, 2, 3); 
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2); 

//Задача 2
function getAverageScore(data) {
  //создаем объект для хранения средних оценок по каждому предмету:
  let averageScore = {};  
  //итерируем и вычисляем среднюю оценку по каждому предмету:
  for (let prop in data) {
    averageScore[prop] = getAverageMark(data[prop]);
  }
  //получаем обьект со средними оценками по каждому предмету:
  //console.log(averageScore);
  //При отсутствии оценок, средняя оценка по всем предметам равна 0.
  if (Object.keys(averageScore).length === 0) {
    averageScore.average = 0;
    return averageScore;
  }
  /*вычисляем среднюю оценку ученика по всем предметам. Для этого сумму средних оценок по каждому предмету 
  делим на количество средних оценок по каждому предмету. Предметы, по которым средняя оценка = 0, в расчет не берем:*/
  let averageMark;
  sum = 0;
  averageScoreArr = [];  
  for (let i = 0; i < Object.keys(averageScore).length; i++) { 
  //в расчет берем только те предметы, по которым есть средняя оценка, не равная 0:
    if (Object.values(averageScore)[i] > 0) {
      averageScoreArr.push(Object.values(averageScore)[i]);
      sum += Object.values(averageScore)[i];
      averageMark = sum / averageScoreArr.length;
    }
  }
  // создаем дополнительное свойство average, в котором хранится средняя отметка ученика по всем предметам:
  averageScore.average = averageMark;
  return averageScore;
}

//вспомогательная функция для вычисления средней оценки по каждому предмету:
function getAverageMark(marks) {
//При отсутствии оценок, средняя оценка по предмету равна 0:
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 0) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++)
  sum += marks[i];
  return sum / marks.length;
  }
}

console.log(getAverageScore({
  algebra: [ 2, 4, 5, 2, 3, 4 ],
  geometry: [ 2, 4, 5 ],
  russian: [ 3, 3, 4, 5 ],
  physics: [ 5, 5 ],
  music: [ 2, 2, 6 ],
  english: [ 4, 4, 3 ],  
  poetry: [ 5, 3, 4 ],
  chemistry: [ 2 ],
  french: [ 4, 4 ]
}));

/*console.log(getAverageScore({
  algebra: [ 2, 4, 5, 2, 3, 4 ],
  geometry: [ 2, 4, 5 ],
  russian: [ 3, 3, 4, 5 ],
  physics: [ ],
  music: [ 2, 2, 6 ],
  english: [ 4, 4, 3 ],  
  poetry: [ 5, 3, 4 ],
  chemistry: [ 2 ],
  french: [ ]
}));*/

//console.log(getAverageScore({}));

//Задача 3
function getPersonData(secretData) {  
  let firstName = getDecodedValue(secretData.aaa);
  let lastName = getDecodedValue(secretData.bbb);
  return {
    firstName,
    lastName
  }
}
function getDecodedValue(secret) {
  if (secret === 0) return `Родриго`;
  if (secret === 1) return `Эмильо`;  
}

console.log( getPersonData ({
  aaa: 0,
  bbb: 0
}));

console.log( getPersonData({
  aaa: 0,
  bbb: 1
}));

console.log( getPersonData({
  aaa: 1,
  bbb: 0
}));

console.log( getPersonData({
  aaa: 1,
  bbb: 1
}));