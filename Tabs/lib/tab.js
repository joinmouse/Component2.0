
let tabHeader =  document.querySelectorAll('.tab-header>li')
let tabContent = document.querySelectorAll('.tab-content>li')

let header = document.querySelector('.tab-header')
console.log(header)

header.addEventListener("click",function(e){
    console.log(e.target.tagName)   
    /*判断当前click元素是否为li子元素
    遍历tabHeader移除所有子元素li的active属性
    同时添加当前e.target(click的li)元素active属性
    */
    if(e.target.tagName.toLowerCase() ==='li'){
        for(let i=0;i<tabHeader.length;i++){
            tabHeader[i].classList.remove("active")
        }
        e.target.classList.add("active")
    }

    //通过call方法，对tabHeader借用数组的indexOf方法确定当前点击节点的序号
    let index = Array.prototype.indexOf.call(tabHeader,e.target)
    console.log(index)

    //参考上面对tabHeader处理的代码注释
    for(let i=0;i<tabContent.length;i++){
        tabContent[i].classList.remove("active")
    }
    tabContent[index].classList.add("active")
})
