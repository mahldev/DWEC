import "./style.css";

document.querySelector("#app").innerHTML = `
  <main>
    <div class="uploadOuter">
      <button id="uploadButton">Upload Image</button>
      <strong>OR</strong>
      <span class="dragBox" >
        Darg and Drop image here
       <input type="file" id="uploadFile" />
      </span>
      </div>
    <div id="preview"></div>
  </main>
`;

const inputImage = document.querySelector("#uploadFile");
const preview = document.getElementById("preview");
const uploadFile = document.getElementById("uploadFile");
const image = document.createElement("img");
const uploadButton = document.getElementById("uploadButton");

preview.appendChild(
  (() => {
    const imageSrc = localStorage.getItem("__image__");
    imageSrc && image.setAttribute("src", imageSrc);
    return image;
  })(),
);

inputImage.addEventListener("change", (event) => {
  const fileName = URL.createObjectURL(event.target.files[0]);
  image.setAttribute("src", fileName);
  localStorage.setItem("__image__", fileName);
  preview.appendChild(image);
});

inputImage.addEventListener("dragover", () => {
  uploadFile.parentNode.className = "draging dragBox";
});

inputImage.addEventListener("drop", () => {
  uploadFile.parentNode.className = "dragBox";
});

uploadButton.addEventListener("click", () => {
  inputImage.click();
});
