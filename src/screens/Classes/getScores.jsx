  const calculate = (score) => {
    let total = 0;
    let progress = 0;
    Object.keys(score).forEach((key) => {
      if(score[key] != null){
        progress++;
        total++;
      }
      else total++;
    });
    return progress/total
  }
  
  const getAttScore = (angi) => {
    let score = angi.gradeDetails["Ирц"];
    return calculate(score)*angi.grades["Ирц"];
  }

  const getLabScore = (angi) => {
    let score = angi.gradeDetails["Лаборатори"];
    return calculate(score)*angi.grades["Лаборатори"];
  }

  const getSemScore = (angi) => {
    let score = angi.gradeDetails["Семинар"];
    return calculate(score)*angi.grades["Семинар"];
  }

  const getAssScore = (angi) => {
    let score = angi.gradeDetails["Бие даалт"];
    return calculate(score)*angi.grades["Бие даалт"];
  }

  const getMidScore = (angi) => {
    let score = angi.gradeDetails["Явцын шалгалт"];
    return calculate(score)*angi.grades["Явцын шалгалт"];
  }

  const getFinScore = (angi) => {
    let score = angi.gradeDetails["Улирлын шалгалт"];
    return calculate(score)*angi.grades["Улирлын шалгалт"];
  }

  const getGradeProgress = (angi) => {
    let gradeProgress = 0;
    object = {};
    if(angi.gradeDetails["Ирц"]){
      gradeProgress += getAttScore(angi);
      object["Ирц"] = getAttScore(angi);
    }
    if(angi.gradeDetails["Лаборатори"]){
      gradeProgress += getLabScore(angi);
      object["Лаборатори"] = getLabScore(angi);
    }
    if(angi.gradeDetails["Семинар"]){
      gradeProgress += getSemScore(angi);
      object["Семинар"] = getSemScore(angi);
    }
    if(angi.gradeDetails["Бие даалт"]){
      gradeProgress += getAssScore(angi);
      object["Бие даалт"] = getAssScore(angi);
    }
    if(angi.gradeDetails["Явцын шалгалт"]){
      gradeProgress += getMidScore(angi);
      object["Явцын шалгалт"] = getMidScore(angi);
    }
    if(angi.gradeDetails["Улирлын шалгалт"]){
      gradeProgress += getFinScore(angi);
      object["Улирлын шалгалт"] = getFinScore(angi);
    }
    return {object, gradeProgress};
  }

export {getAttScore, getLabScore, getSemScore, getAssScore, getMidScore, getFinScore, getGradeProgress}