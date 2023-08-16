// bottom

// DOM elements
const buttonbottom = document.querySelector("#bottom");
const bottomsheet = document.querySelector("#bsheet");
const bclose = bottomsheet.querySelector(".overlay");
const bcontent = bottomsheet.querySelector(".content");
const bdrag = bottomsheet.querySelector(".drag");

// vars
let isDragged = false, startY, startHeight;

// function showing sheet
const bottomappear = () => {
    bottomsheet.classList.add("appear");
    document.body.style.overflowY = "hidden";
    bsetHeight(50);
}

// function closing sheet
const bottomclose = () => {
    bottomsheet.classList.remove("appear");
}

// function changing sheet height
const bsetHeight = (height) => {
    bcontent.style.height = `${height}vh`;
    bottomsheet.classList.toggle("full", height === 100);
}

// sheet dragging function
const bdragging = (e) => {
    if(!isDragged) return; 
    const height = startHeight + (startY - (e.pageY || e.touches?.[0].pageY)) / window.innerHeight*100;
    bsetHeight(height);
    
}

// function starting drag
const bstartDrag = (e) => {
    isDragged = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(bcontent.style.height);
    bottomsheet.classList.add("dragging");
}

// function stoping dragging
const bstopDrag = () => {
    isDragged = false;
    bottomsheet.classList.remove("dragging");
    const sheetHeight = parseInt(bcontent.style.height);
    if(sheetHeight<20) bottomclose();
    if(sheetHeight>80) bsetHeight(100);

}

// Event listiners for dragging
bdrag.addEventListener("mousedown", bstartDrag);
document.addEventListener("mouseup", bstopDrag);
document.addEventListener("mousemove", bdragging);

bdrag.addEventListener("touchstart", bstartDrag);
document.addEventListener("touchmove", bdragging);
document.addEventListener("touchend", bstopDrag);

// button event listiner
buttonbottom.addEventListener("click", bottomappear);

bclose.addEventListener("click", bottomclose)

// top

// DOM elements
const buttontop = document.querySelector("#top");
const topsheet = document.querySelector("#tsheet");
const tclose = topsheet.querySelector(".overlay");
const tcontent = topsheet.querySelector(".content");
const tdrag = topsheet.querySelector(".drag");

// function showing sheet
const topappear = () => {
    topsheet.classList.add("appear");
    document.body.style.overflowY = "hidden";
    tsetHeight(50);
}

// function closing sheet
const topclose = () => {
    topsheet.classList.remove("appear");
}

// function changing sheet height
const tsetHeight = (height) => {
    tcontent.style.height = `${height}vh`;
    topsheet.classList.toggle("full", height === 100);
}

// sheet dragging function
const tdragging = (e) => {
    if(!isDragged) return; 
    const height = startHeight - (startY - (e.pageY || e.touches?.[0].pageY)) / window.innerHeight*100;
    tsetHeight(height);
    
}

// function starting drag
const tstartDrag = (e) => {
    isDragged = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(tcontent.style.height);
    topsheet.classList.add("dragging");
}

// function stoping dragging
const tstopDrag = () => {
    isDragged = false;
    topsheet.classList.remove("dragging");
    const sheetHeight = parseInt(tcontent.style.height);
    if(sheetHeight<20) topclose();
    if(sheetHeight>80) tsetHeight(100);

}

// Event listiners for dragging
tdrag.addEventListener("mousedown", tstartDrag);
document.addEventListener("mouseup", tstopDrag);
document.addEventListener("mousemove", tdragging);

tdrag.addEventListener("touchstart", tstartDrag);
document.addEventListener("touchmove", tdragging);
document.addEventListener("touchend", tstopDrag);

// button event listiner
buttontop.addEventListener("click", topappear);

tclose.addEventListener("click", topclose)