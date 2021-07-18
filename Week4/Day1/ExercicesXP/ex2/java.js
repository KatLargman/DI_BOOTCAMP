function experiencePoints() {
    if (winBattle()) {
      return 10;
    } else {
      return 1;
    }
  }
  
  const experiencePoints = () => {
    return winBattle ? 10 : 1;
  };
