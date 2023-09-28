var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    // markers:true,
    scrub:true
}})
tl.to("#fanta",{
    top:"120%",
    left:"5%"

},'orange')
tl.to("#orange-cut",{
    top:"160%",
    left:"25%"

},'orange')
tl.to("#orange",{
    top:"165%",
    right:"10%",
    width:"16%"

},'orange')
tl.to("#leaf",{
    top:"110%",
    left:"80%",
    rotate:"130deg",
    width:"16%"

},'orange')
tl.to("#leaf2",{
    top:"110%",
    left:"0%",
    rotate:"130deg",
   

},'orange')
var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    // markers:true,
    scrub:true
}})
tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"15vw",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"30%",
    top: "215%",
    left: "35%",
}, 'ca')












