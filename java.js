{
    var saveTextAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Pobierz Plik";
    if (window.webkitURL != null)
   else {
    downloadLink.hert = window.webkitURL.createObjectURL(saveTextAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);



   }
   downloadLink.click();




}
<textarea name="Tekst" id="Tekst" cols="80" rows="20" style="border:outset 4px rgb(32, 139, 189);"  autocapitalize spellcheck  placeholder="𝓣𝓾 𝓶𝓸𝔃̇𝓮𝓼𝔃 𝓹𝓲𝓼𝓪𝓬́..."></textarea>
<button? onclick=saveTextAsFile(t.value,'pliczek.txt')>Pobierz<button>
Run code snippedExpand snippet (null)