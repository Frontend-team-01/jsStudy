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
    render();
    return (clk = false);
  }
  if (!clk) {
    chart.sort((a, b) => b["num"] - a["num"]);
    render();
    return (clk = true);
  }
}

// 댄스 버튼을 클릭하면 장르가 댄스인 곡(type = "dance")이 필터링 된다.
// 장르가 댄스인 노래를 필터링 하는거까지 성공.. 렌더링은 아직 미구현 상태
danceFilter.addEventListener("click", danceList);

function danceList() {
  let danceChart = chart.filter((item) => item["type"] === "댄스");
  console.log(danceChart);
}

// 발라드 버튼을 클릭하면 장르가 발라드인 곡(type = "ballad")이 필터링 된다.
// 장르가 발라드인 노래를 필터링 하는거까지 성공.. 렌더링은 아직 미구현 상태
balladFilter.addEventListener("click", balladList);

function balladList() {
  let balladChart = chart.filter((item) => item["type"] === "발라드");
  console.log(balladChart);
}

// 화면에 1위부터 10위까지 노래를 렌더링
function render() {
  let resultHTML = "";
  resultHTML += `
  <div class="play-list">
          <div>1</div>
          <div>
            <div class="flow-first">${chart[0]["name"]}</div>
            <div>${chart[0]["group"]}</div>
          </div>
          <div class="flow-second">${chart[0]["album"]}</div>
          <div>
            <div>❤️ ${chart[0]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>2</div>
          <div>
            <div class="flow-first">${chart[1]["name"]}</div>
            <div>${chart[1]["group"]}</div>
          </div>
          <div class="flow-second">${chart[1]["album"]}</div>
          <div>
            <div>❤️ ${chart[1]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>3</div>
          <div>
            <div class="flow-first">${chart[2]["name"]}</div>
            <div>${chart[2]["group"]}</div>
          </div>
          <div class="flow-second">${chart[2]["album"]}</div>
          <div>
            <div>❤️ ${chart[2]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>4</div>
          <div>
            <div class="flow-first">${chart[3]["name"]}</div>
            <div>${chart[3]["group"]}</div>
          </div>
          <div class="flow-second">${chart[3]["album"]}</div>
          <div>
            <div>❤️ ${chart[3]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>5</div>
          <div>
            <div class="flow-first">${chart[4]["name"]}</div>
            <div>${chart[4]["group"]}</div>
          </div>
          <div class="flow-second">${chart[4]["album"]}</div>
          <div>
            <div>❤️ ${chart[4]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>6</div>
          <div>
            <div class="flow-first">${chart[5]["name"]}</div>
            <div>${chart[5]["group"]}</div>
          </div>
          <div class="flow-second">${chart[5]["album"]}</div>
          <div>
            <div>❤️ ${chart[5]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>7</div>
          <div>
            <div class="flow-first">${chart[6]["name"]}</div>
            <div>${chart[6]["group"]}</div>
          </div>
          <div class="flow-second">${chart[6]["album"]}</div>
          <div>
            <div>❤️ ${chart[6]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>8</div>
          <div>
            <div class="flow-first">${chart[7]["name"]}</div>
            <div>${chart[7]["group"]}</div>
          </div>
          <div class="flow-second">${chart[7]["album"]}</div>
          <div>
            <div>❤️ ${chart[7]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>9</div>
          <div>
            <div class="flow-first">${chart[8]["name"]}</div>
            <div>${chart[8]["group"]}</div>
          </div>
          <div class="flow-second">${chart[8]["album"]}</div>
          <div>
            <div>❤️ ${chart[8]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
        <div class="play-list">
          <div>10</div>
          <div>
            <div class="flow-first">${chart[9]["name"]}</div>
            <div>${chart[9]["group"]}</div>
          </div>
          <div class="flow-second">${chart[9]["album"]}</div>
          <div>
            <div>❤️ ${chart[9]["num"]}</div>
            <div>
              <div>></div>
              <div>+</div>
              <div>v</div>
              <div>>></div>
            </div>
          </div>
        </div>
  `;
  document.getElementById("task-board").innerHTML = resultHTML;
}

render();
