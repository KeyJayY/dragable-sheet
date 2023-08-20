// bottom

// DOM elements
const buttonbottom = document.querySelector("#bottom");
const bottomsheet = document.querySelector("#bsheet");
const bclose = bottomsheet.querySelector(".overlay");
const bcontent = bottomsheet.querySelector(".content");
const bdrag = bottomsheet.querySelector(".drag");

// vars
let bisDragged = false, startY, startX, startHeight, startWidth;
let tisDragged = false;
let risDragged = false;
let lisDragged = false;

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
    if(!bisDragged) return; 
    const height = startHeight + (startY - (e.pageY || e.touches?.[0].pageY)) / window.innerHeight*100;
    bsetHeight(height);
    
}

// function starting drag
const bstartDrag = (e) => {
    bisDragged = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(bcontent.style.height);
    bottomsheet.classList.add("dragging");
}

// function stoping dragging
const bstopDrag = () => {
    bisDragged = false;
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
    if(!tisDragged) return; 
    const height = startHeight - (startY - (e.pageY || e.touches?.[0].pageY)) / window.innerHeight*100;
    tsetHeight(height);
    
}

// function starting drag
const tstartDrag = (e) => {
    tisDragged = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(tcontent.style.height);
    topsheet.classList.add("dragging");
}

// function stoping dragging
const tstopDrag = () => {
    tisDragged = false;
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

// right

// DOM elements
const buttonright = document.querySelector("#right");
const rightsheet = document.querySelector("#rsheet");
const rclose = rightsheet.querySelector(".overlay");
const rcontent = rightsheet.querySelector(".content");
const rdrag = rightsheet.querySelector(".dragv");

// function showing sheet
const rightappear = () => {
    rightsheet.classList.add("appear");
    document.body.style.overflowX = "hidden";
    rsetWidth(50);
}

// function closing sheet
const rightclose = () => {
    rightsheet.classList.remove("appear");
}

// function changing sheet width
const rsetWidth = (width) => {
    rcontent.style.width = `${width}vw`;
    rightsheet.classList.toggle("full", width === 100);
}

// sheet dragging function
const rdragging = (e) => {
    if(!risDragged) return; 
    console.log("a");
    const width = startWidth + (startX - (e.pageX || e.touches?.[0].pageX)) / window.innerWidth*100;
    rsetWidth(width);
    
}

// function starting drag
const rstartDrag = (e) => {
    risDragged = true;
    startX = e.pageX || e.touches?.[0].pageX;
    startWidth = parseInt(rcontent.style.width);
    rightsheet.classList.add("dragging");
}

// function stoping dragging
const rstopDrag = () => {
    risDragged = false;
    rightsheet.classList.remove("dragging");
    const sheetWidth = parseInt(rcontent.style.width);
    if(sheetWidth<20) rightclose();
    if(sheetWidth>80) rsetWidth(100);

}

// Event listiners for dragging
rdrag.addEventListener("mousedown", rstartDrag);
document.addEventListener("mousemove", rdragging);
document.addEventListener("mouseup", rstopDrag);

rdrag.addEventListener("touchstart", rstartDrag);
document.addEventListener("touchmove", rdragging);
document.addEventListener("touchend", rstopDrag);

// button event listiner
buttonright.addEventListener("click", rightappear);
rclose.addEventListener("click", rightclose)

// left

// DOM elements
const buttonleft = document.querySelector("#left");
const leftsheet = document.querySelector("#lsheet");
const lclose = leftsheet.querySelector(".overlay");
const lcontent = leftsheet.querySelector(".content");
const ldrag = leftsheet.querySelector(".dragv");

// function showing sheet
const leftappear = () => {
    leftsheet.classList.add("appear");
    document.body.style.overflowX = "hidden";
    lsetWidth(50);
}

// function closing sheet
const leftclose = () => {
    leftsheet.classList.remove("appear");
}

// function changing sheet width
const lsetWidth = (width) => {
    lcontent.style.width = `${width}vw`;
    leftsheet.classList.toggle("full", width === 100);
}

// sheet dragging function
const ldragging = (e) => {
    if(!lisDragged) return; 
    const width = startWidth - (startX - (e.pageX || e.touches?.[0].pageX)) / window.innerWidth*100;
    lsetWidth(width);
    
}

// function starting drag
const lstartDrag = (e) => {
    lisDragged = true;
    startX = e.pageX || e.touches?.[0].pageX;
    startWidth = parseInt(lcontent.style.width);
    leftsheet.classList.add("dragging");
}

// function stoping dragging
const lstopDrag = () => {
    lisDragged = false;
    leftsheet.classList.remove("dragging");
    const sheetWidth = parseInt(lcontent.style.width);
    if(sheetWidth<20) leftclose();
    if(sheetWidth>80) lsetWidth(100);

}

// Event listiners for dragging
ldrag.addEventListener("mousedown", lstartDrag);
document.addEventListener("mousemove", ldragging);
document.addEventListener("mouseup", lstopDrag);

rdrag.addEventListener("touchstart", lstartDrag);
document.addEventListener("touchmove", ldragging);
document.addEventListener("touchend", lstopDrag);

// button event listiner
buttonleft.addEventListener("click", leftappear);
lclose.addEventListener("click", leftclose)