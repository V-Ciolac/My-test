 const makeNuclearButton = () => {
    let timeWithoutDistration = 0;
    const passTime = () => timeWithoutDistration++;
    const totalPeaceTime = () => timeWithoutDistration;
    const launch = () => {
        timeWithoutDistration = -1;
        return 'BUM';
    };
    setInterval(passTime, 1000);
    return {
               totalPeaceTime : totalPeaceTime
    }
 }
 const ohNo = makeNuclearButton();
 ohNo.totalPeaceTime()