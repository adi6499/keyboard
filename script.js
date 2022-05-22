      
           let firstSlate=['Escape','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','p5','ScrollLock','Pause']
           let secondSlate=['`',1,2,3,4,5,6,7,8,9,0,'-','+','Backspace','Insert','Home','PageUp']
           let thirdSlate=['tab','q','w','e','r','t','y','u','i','o','p','[{','}]','\|','Delete','End','PageDown']
           let fourthSlate=['CapsLock','a','s','d','f','g','h','j','k','l',':;',"'",'Enter']
           let fifthSlate=['Shift','z','x','c','v','b','n','m',',','.','/','Shift','ArrowUp']
           let  sixthSlate=['Control','Meta','Alt','','Alt','fn','ContextMenu','ArrowLeft','ArrowDown']

     
        let firstSlates = document.querySelector(".firstSlate")
        let secondSlates = document.querySelector(".secondSlate")
        let thirdSlates = document.querySelector(".thirdSlate")
        let fourthSlates = document.querySelector(".fourthSlate")
        let fifthSlates = document.querySelector(".fifthSlate")
        let sixthSlates = document.querySelector(".sixthSlate")
        for(let i=0;i < firstSlate.length;i++){
            firstSlates.innerHTML+=`<div id=goal class=${firstSlate[i]}>${firstSlate[i]}</div>`
        }
        for(let i=0;i < secondSlate.length;i++){
            secondSlates.innerHTML+=`<div id=goal class=${secondSlate[i]}>${secondSlate[i]}</div>`
        }
        for(let i=0;i < thirdSlate.length;i++){
            thirdSlates.innerHTML+=`<div id=goal class=${thirdSlate[i]}>${thirdSlate[i]}</div>`
        }
        for(let i=0;i < fourthSlate.length;i++){
            fourthSlates.innerHTML+=`<div id=goal class=${fourthSlate[i]}>${fourthSlate[i]}</div>`
        }
        for(let i=0;i < fifthSlate.length;i++){
            fifthSlates.innerHTML+=`<div id=goal class=${fifthSlate[i]}>${fifthSlate[i]}</div>`
        }
        for(let i=0;i < sixthSlate.length;i++){
            sixthSlates.innerHTML+=`<div id=goal class=${sixthSlate[i]}>${sixthSlate[i]}</div>`
        }
        let but = document.querySelectorAll("#goal")
        document.addEventListener("keydown",(e)=>{
            document.querySelector(`.${e.key}`).style.background="white"
            document.querySelector(`.${e.key}`).style.color="black"
            document.querySelector(`.${e.key}`).style.boxShadow=`0px 0px 10px black inset`
        })
        
        document.addEventListener("keyup",(e)=>{
            document.querySelector(`.${e.key}`).style.background="linear-gradient(to bottom,rgb(41, 41, 41) ,black)"
            document.querySelector(`.${e.key}`).style.color="white"
            document.querySelector(`.${e.key}`).style.boxShadow=`0px 0px 3px white inset`
        })


        window.addEventListener("click",()=>{
            let random = Math.random() * 360
            document.querySelector(".keyboard").style.borderColor=`hsl(${random},100%,50%)`
            document.querySelector(".keyboard").style.boxShadow=`0px 0px 50px hsl(${random},100%,50%),
            0px 0px 40px hsl(${random},100%,50%) inset `;
        })