let completedCount = 0;

function addTask() {
  const name = document.getElementById("taskName").value.trim();
  const tag = document.getElementById("taskTag").value.trim();
  if (!name) return;

  const taskList = document.getElementById("taskList");

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const info = document.createElement("div");
  info.className = "task-info";

  const title = document.createElement("strong");
  title.innerText = name;

  const labelRow = document.createElement("div");
  labelRow.style.display = "flex";
  labelRow.style.alignItems = "center";
  labelRow.style.flexWrap = "wrap";
  labelRow.style.gap = "10px";
  labelRow.style.marginTop = "4px";

  const tagLabel = document.createElement("span");
  tagLabel.className = "tag";
  tagLabel.innerText = tag || "geral";

  const completedDate = document.createElement("span");
  completedDate.style.fontSize = "12px";
  completedDate.style.color = "#00c853";
  completedDate.style.display = "none";

  const createdDate = document.createElement("span");
  const createdAt = new Date().toLocaleDateString('pt-BR');
  createdDate.innerText = `Criado em: ${createdAt}`;
  createdDate.style.fontSize = "12px";
  createdDate.style.color = "#999";

  labelRow.appendChild(tagLabel);
  labelRow.appendChild(completedDate);
  labelRow.appendChild(createdDate);

  info.appendChild(title);
  info.appendChild(labelRow);

  const btn = document.createElement("button");
  btn.className = "done-btn";
  btn.innerText = "Concluir";

  btn.onclick = function () {
    if (!taskItem.classList.contains("done")) {
      taskItem.classList.add("done");
      btn.innerText = "✔️";
      const doneAt = new Date().toLocaleDateString('pt-BR');
      completedDate.innerText = `Concluído em: ${doneAt}`;
      completedDate.style.display = "inline";
      completedCount++;
      updateFooter();
    }
  };

  taskItem.appendChild(info);
  taskItem.appendChild(btn);

  taskList.appendChild(taskItem);

  document.getElementById("taskName").value = "";
  document.getElementById("taskTag").value = "";
}

function updateFooter() {
  document.getElementById("taskFooter").innerText = `${completedCount} tarefa(s) concluída(s)`;
}
