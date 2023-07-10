/* 
레시피 재료 추가하기
*/

const form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const foodName = document.getElementById(".ingredient");
    const foodWeight = document.getElementById(".weight");
    const addBtn = document.querySelector("button");
    
    addBtn.addEventListener("click", view);
    function view() {
      let my_tbody = document.getElementById('my-tbody');
      const itemInput = document.getElementById("ingredient")
      const wgInput = document.getElementById("weight")
      const content = itemInput.value
      const content2 = wgInput.value
      // let row = my_tbody.insertRow(0); // 상단에 추가
      let row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = content;
      cell2.innerHTML = content2;
      cell3.innerHTML = `<button onclick="delete_row()">행 삭제하기</button>`;
    }
  
    function delete_row() {
      var my_tbody = document.getElementById('my-tbody');
      if (my_tbody.rows.length < 1) return;
      // my_tbody.deleteRow(0); // 상단부터 삭제
      my_tbody.deleteRow( my_tbody.rows.length-1 ); // 하단부터 삭제
    }