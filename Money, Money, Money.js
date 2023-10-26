function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    
    while (principal < desired) {
      const interestEarned = principal * interest;
      const taxDeducted = interestEarned * tax;
      principal += interestEarned - taxDeducted;
      years++;
    }
    
    return years;
  }  