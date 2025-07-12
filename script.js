const quizzes = {
  quiz1: [
    {q:"산지 관광의 장점이 아닌 것은?", options:["기온이 낮다", "경관이 아름답다","바다낚시 가능하다","생태 체험 가능"], correct:2},
    {q:"단구 지형이 좋은 관광 자원이 되는 이유는?", options:["빛나는 해변","계단같은 풍경","빙하 퇴적","열대우림 속"], correct:1},
    {q:"리아스식 해안의 주요 특징은?", options:["복잡한 해안선","평탄한 사빈","사막","빙하토양"], correct:0},
    {q:"습지/호수가 포함된 물지형은 왜 중요한가?", options:["모래언덕","수변 경관","고산경관","빙하"], correct:1},
    {q:"협곡(침식 지형)의 대표 사례는?", options:["사하라","그랜드캐니언","시드니","베네치아"], correct:1}
  ],
  quiz2: [
    {q:"건조기후 지역 관광이 아닌 것은?", options:["사막 사파리","오아시스","빙하 탐험","일몰 감상"], correct:2},
    {q:"열대기후 관광에서 기대할 수 없는 것은?", options:["열대우림 생물","바나나농장 체험","눈 축제","문화 체험"], correct:2},
    {q:"온대기후의 특징은?", options:["사계절 경관 변화","영구동토","산호초","사막"], correct:0},
    {q:"냉대기후 관광 요소는?", options:["사막","침엽수림 겨울스포츠","열대야","해수욕"], correct:1},
    {q:"한대기후에서 가능한 관광 활동은?", options:["오로라","수영","정글사파리","사막탐험"], correct:0}
  ],
  quiz3: [
    {q:"설악산의 관광경쟁력이 아닌 것은?", options:["단풍경관","케이블카","열대우림","희귀생태"], correct:2},
    {q:"한탄강 주상절리는 어떻게 형성되었나?", options:["용암 냉각","빙하","사빈","카르스트"], correct:0},
    {q:"우포늪은 어떤 관광 활동에 적합한가?", options:["조류 관찰","스키","해수욕","사막체험"], correct:0},
    {q:"해안단구는 무엇을 보여주는가?", options:["지질 단층","해수면 변화 지층","빙하퇴적","도시경관"], correct:1},
    {q:"국내 자연 여행지 홍보 시 강조할 요소는?", options:["자연경관","지역성","체험활동","사막시장"], correct:3}
  ]
};

let currentQuiz = [];

function showExplain(e) {
  const id = e.currentTarget.dataset.target;
  document.querySelectorAll('.explain').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openQuiz(e) {
  const quizId = e.currentTarget.dataset.quiz;
  currentQuiz = quizzes[quizId];
  renderQuiz(currentQuiz);
  document.getElementById('quiz-modal').style.display = 'block';
}

function closeQuiz() {
  document.getElementById('quiz-modal').style.display = 'none';
  document.getElementById('score').innerText = '';
}

function renderQuiz(quiz) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  quiz.forEach((item,i) => {
    const qd = document.createElement('div');
    qd.innerHTML = `<p>${i+1}. ${item.q}</p>` +
      item.options.map((o,j)=>
        `<label><input type="radio" name="q${i}" value="${j}"> ${o}</label><br>`
      ).join('');
    container.appendChild(qd);
  });
}

function submitQuiz() {
  let score = 0;
  currentQuiz.forEach((item,i) => {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    if (sel && parseInt(sel.value) === item.correct) score++;
  });
  document.getElementById('score').innerText = `정답: ${score} / ${currentQuiz.length}`;
}

document.querySelectorAll('.concept').forEach(el => el.addEventListener('click', showExplain));
document.querySelectorAll('.quiz-btn').forEach(el => el.addEventListener('click', openQuiz));
document.getElementById('close').addEventListener('click', closeQuiz);
document.getElementById('submit').addEventListener('click', submitQuiz);