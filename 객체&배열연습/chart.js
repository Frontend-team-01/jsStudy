// 각 노래를 구분해주는 랜덤 id생성
let newID = function () {
  return Math.random().toString(36).substr(2, 16);
};
// 각 노래를 좋아요 순서대로 정렬하기 위한 랜덤 좋아요 갯수 생성
let like = function () {
  return Math.floor(Math.random() * 100000);
};

// 멜론 차트 1위부터 10위까지
// 객체에는 각 노래에 대한 정보를 담고 있다.
let chart = [
  { group: "(여자)아이들", name: "퀸카 (Queencard)", type: "댄스", album: "I feel", id: newID(), num: like() },
  { group: "IVE (아이브)", name: "I AM", type: "댄스", id: newID(), album: "I've IVE", num: like() },
  { group: "aespa", name: "Spicy", type: "댄스", album: "MY WORLD - The 3rd Mini Album", id: newID(), num: like() },
  { group: "LE SSERAFIM(르세라핌)", name: "UNFORGIVEN(feat. Nile Rodgers)", type: "댄스", album: "UNFORGIVEN", id: newID(), num: like() },
  { group: "LE SSERAFIM(르세라핌)", name: "이브, 프시케 그리고 푸른 수염의 아내", type: "댄스", album: "UNFORGIVEN", id: newID(), num: like() },
  { group: "IVE (아이브)", name: "Kitsch", type: "댄스", album: "I've IVE", id: newID(), num: like() },
  { group: "임영웅", name: "모래 알갱이", type: "발라드", album: "모래 알갱이", id: newID(), num: like() },
  { group: "임영웅", name: "사랑은 늘 도망가", type: "발라드", album: "신사와 아가씨 OST Part.2", id: newID(), num: like() },
  { group: "NEWJeans", name: "Hype boy", type: "댄스", album: "NewJeans 1st EP 'New Jeans'", id: newID(), num: like() },
  { group: "지수 (JISOO)", name: "꽃", type: "댄스", album: "ME", id: newID(), num: like() },
];

let likeFilter = document.getElementById("like-filter");
let danceFilter = document.getElementById("dance-filter");
let balladFilter = document.getElementById("ballad-filter");

// 좋아요▼를 한 번 클릭하면 좋아요 순서대로 내림차순 정렬, 한 번 더 클릭하면 오름차순 정렬
likeFilter.addEventListener("click", sortDown);
let clk = true;

function sortDown() {
  if (clk === true) {
    chart.sort((a, b) => a["num"] - b["num"]);
    render(chart);
    return (clk = false);
  }
  if (!clk) {
    chart.sort((a, b) => b["num"] - a["num"]);
    render(chart);
    return (clk = true);
  }
}

// 댄스 버튼을 클릭하면 장르가 댄스인 곡(type = "dance")이 필터링 된다.
danceFilter.addEventListener("click", danceList);

/*
function danceList() {
  let danceChart;
  danceChart = chart.filter((item) => item["type"] === "댄스");
  console.log(danceChart);
  render(danceChart);
}
*/
// type = "dance"인 곡까지 필터링 성공.
// render(danceChart)로 필터링 된 값만 렌더링 하려고 하니 에러 발생
// chart.js:74 Uncaught TypeError: Cannot read properties of undefined (reading 'name') at render

function danceList() {
  for (let j = 0; j < chart.length; j++) {
    while (chart[j]["type"] !== "댄스") {
      chart.splice(j, 1);
    }
  }
  render(chart);
}
// while문을 사용하여 필터링 구현
// 근데 왜 for문 안에 if문을 이용하면 하나밖에 삭제가 안되는지...??
// 그리고 위에 filter 함수를 사용하면 에러가 나와서 왜 그런지 잘 모르겠다.

// 발라드 버튼을 클릭하면 장르가 발라드인 곡(type = "ballad")이 필터링 된다.
balladFilter.addEventListener("click", balladList);

function balladList() {
  for (let j = 0; j < chart.length; j++) {
    while (chart[j]["type"] !== "발라드") {
      chart.splice(j, 1);
    }
  }
  render(chart);
}

// 화면에 1위부터 10위까지 노래를 렌더링
function render(arr) {
  let resultHTML = "";
  for (let i = 0; i < chart.length; i++) {
    resultHTML += `
  <div class="play-list">
          <div>${i + 1}</div>
          <div>
            <div class="flow-first">${arr[i]["name"]}</div>
            <div>${arr[i]["group"]}</div>
          </div>
          <div class="flow-second">${arr[i]["album"]}</div>
          <div>
            <div>❤️ ${arr[i]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
  `;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

render(chart);
