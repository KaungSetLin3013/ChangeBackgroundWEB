var cc = {
    
    colorMap : {
        red: {cor:`#BE013C`,text:`🌹 背景色の変更`},
        green: {cor:`#ACDD4D`,text:`🌳 背景色の変更`},
        blue: {cor:`#21ABCD`,text:`🌊 背景色の変更`},
        black: {cor:`#011635`,text:`🌙 背景色の変更`},
        white: {cor:`#F7FAF7`,text:`⛄ 背景色の変更`},
        orange: {cor:`#FD5E53`,text:`🔥 背景色の変更`}
    },
    lastColor : function(){return this.colorMap.white},
    changeColor(color = this.colorMap[color]) {
        console.log(color)
            document.body.style.backgroundColor = color.cor;
            document.querySelector('.paragraph').style.color = color.cor
            
            if (this.lastColor !=color){
                document.querySelector('.instructions').style.background = this.lastColor.cor
                document.querySelector('h1').style.color = this.lastColor.cor
                document.querySelector('h1').textContent = this.lastColor.text
                this.lastColor = color
            }
            
            
        

}
}
