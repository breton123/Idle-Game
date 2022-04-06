$(document).ready(function(){
    var money = 0;
    var hitValue = 1;
    var autoHitValue = 0;
    var upgrade = 1;
    var hits = 0;
    var hitAmount = 1;
    var autoHit = 0;
    var autoStrength = 1;
    var upgradePrice = 1;
    var autoHitPrice = 10;
    var mineral = 0;
    var mineralUpgradePrice = 50;
    var hitSound = new Audio("mining.mp3");
    var buySound = new Audio("purchase.mp3");
    var menu;

    setInterval(function(){
        if (autoHit>0){
            hitSound.play();
        };
        hits += autoHit
        money += autoHitValue;
        changeInventory();
    }, 1000);

    $("#hit").click(function(){
        hitSound.play();
        hits += hitAmount;
        money += hitValue;
        changeInventory();
    });

    $("#upgrade").click(function(){
        action = upgradeHit();
        buySound.play();
    });

    $("#material").click(function(){
        action = changeMineral();
        buySound.play();
    });



    $("#auto").click(function(){
        if (money>=autoHitPrice){
            $(".miner").css("display", "block");
            money -= autoHitPrice
            autoHitPrice = autoHitPrice*2
            autoHitValue = hitValue
            autoHit += 1
            $("#auto").html("Upgrade Auto Hitter [£"+ autoHitPrice + "]");
            $("#auto-level").html("Auto-Hitter Power: "+ autoHit);
            buySound.play();
            changeInventory();
        };
    });


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
    }

function changeMineral(){
    if (money>=mineralUpgradePrice){
        if (mineral==0){
            $("#hit").attr("src","emerald.png");
                }
        if (mineral==1){
            $("#hit").attr("src","pink.png");
                }
        money -= mineralUpgradePrice
        hitValue = hitValue*2
        autoHitValue = hitValue
        mineralUpgradePrice = mineralUpgradePrice*2
        $("#material").html("Upgrade Mineral [£" +  mineralUpgradePrice + "]");
        mineral += 1
        changeInventory();
    return
}};

function changeInventory(){
    $("#money").html("Money: £" + money);
    $("#hits").html("Hits: " + hits);
    return
};

function upgradeHit(){
    if (money>=upgradePrice){
        upgrade += 1
        money -= upgradePrice
        upgradePrice = upgradePrice*2
        hitAmount += 1
        $("#power").html("Hammer Power: " + upgrade);
        $("#upgrade").html("Upgrade Sledgehammer [£" + upgradePrice + "]");
        changeInventory();
    };
    return;
};



});