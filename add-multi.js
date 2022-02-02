function woodCalc(chairQuan, tableQuan, bedQuan){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuan = chairQuan * perChairWood;
    const tableWoodQuan = tableQuan * perTableWood;
    const bedWoodQuan = bedQuan * perBedWood;

    const totalWood = chairWoodQuan + tableWoodQuan + bedWoodQuan;
    return totalWood;
}

const firstOpt = woodCalc(1, 1, 1);
console.log(firstOpt);