const paperBall = document.querySelector(".paper-ball-container img");
const bin = document.querySelector(".bin-container img");
const paperBallContainer = document.querySelector('.paper-ball-container')


paperBall.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "paperBall");
});

bin.addEventListener("dragover", (event) => {
  event.preventDefault();
});

bin.addEventListener("drop", (event) => {
  event.preventDefault();
  const paperId = event.dataTransfer.getData("text/plain");

  if (paperId === "paperBall") {
    paperBallContainer.hidden = true;
    bin.src = "./assets/recycle-bin-500x500.png";
    bin.draggable = true;
  }
});

bin.addEventListener("dragstart", (event) => {
  const dragImage = new Image();
  dragImage.src = "./assets/paper-ball (Custom).png";
  event.dataTransfer.setDragImage(dragImage, 0, 0);
  event.target.append(paperBall);
});
