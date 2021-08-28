let paragraphs = document.querySelectorAll('.box *'),
    boxes = document.querySelectorAll('.box');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('paragraph', e.target.id);
        e.dataTransfer.effectAllowed = "move";
    });
});

// BOTH dragover and drop need to be there for DROP ZONE to work!

boxes.forEach(box => {
    box.addEventListener('drop', function(e) {
        e.preventDefault();
        let id = e.dataTransfer.getData('paragraph');
        if (id) {
            let element = document.getElementById(id);
            e.target.appendChild(element);
        }
    });
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    })
})