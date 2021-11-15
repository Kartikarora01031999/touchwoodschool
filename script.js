$(document).ready(function(){
    url = 'https://kartikarora01031999.github.io/touchwoodschool/pdf1.pdf';
    var thePdf = null;
    var scale = 1;
    
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        thePdf = pdf;
        viewer = document.getElementById('pdf-viewer');
        
        for(page = 1; page <= pdf.numPages; page++) {
          canvas = document.createElement("canvas");    
          canvas.className = 'pdf-page-canvas';         
          viewer.appendChild(canvas);            
          renderPage(page, canvas);
        }
    });
    
    function renderPage(pageNumber, canvas) {
        thePdf.getPage(pageNumber).then(function(page) {
          viewport = page.getViewport({ scale: scale });
          canvas.height = viewport.height;
          canvas.width = viewport.width;          
          page.render({canvasContext: canvas.getContext('2d'), viewport: viewport});
    });
    } 
});