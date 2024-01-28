// formValidation.js

export const validateGiftPrice = (value) => {
    if (!value) {
      return "Gift Price is required";
    }
    // You can add more validation rules as needed
    return null;
  };
  
  export const validateGiftQuantity = (value) => {
    if (!value) {
      return "Gift quantity is required";
    }
    // You can add more validation rules as needed
    return null;
  };

  export const validateOnEmailOrSms = (value) => {
    if (!value) {
      return "Please select";
    }
    // You can add more validation rules as needed
    return null;
  };

  export const validateSendNowOrLater = (value) => {
    if (!value) {
      return "Please select";
    }
    // You can add more validation rules as needed
    return null;
  };

  export const validateFirstName = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "First Name is required";
    }
    return null;
  };

  export const validateLastName = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Last Name is required";
    }
    return null;
  };

  export const validateEmailId = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Email Id is required";
    }
    return null;
  };

  export const validateMobileNo = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Mobile number is required";
    }
    return null;
  };

  export const validateGiftCategory = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Please select";
    }
    return null;
  };

  export const validateGiftTheme = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Please select";
    }
    return null;
  };

  export const validateEmailSubject = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Please enter";
    }
    return null;
  };

  export const validateEmailBody = (value, formToggle) => {
    if (formToggle === "gift-to-someone" && !value) {
      return "Please enter";
    }
    return null;
  };


  // Add more validation functions as needed...
  