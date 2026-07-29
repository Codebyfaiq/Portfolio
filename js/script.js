// Real-time validation functions - Purple Theme
function validateName() {
    let name = document.getElementById('name').value.trim();
    let nameRegex = /^[A-Za-z\s]+$/;
    let errorSpan = document.getElementById('nameError');
    
    if (name === "") {
        errorSpan.innerHTML = "Name is required";
        errorSpan.style.display = 'block';
        document.getElementById('name').style.borderColor = '#a98eff';
        return false;
    } else if (!nameRegex.test(name)) {
        errorSpan.innerHTML = "Only letters and spaces allowed";
        errorSpan.style.display = 'block';
        document.getElementById('name').style.borderColor = '#a98eff';
        return false;
    } else if (name.length < 2) {
        errorSpan.innerHTML = "Minimum 2 characters required";
        errorSpan.style.display = 'block';
        document.getElementById('name').style.borderColor = '#a98eff';
        return false;
    } else {
        errorSpan.style.display = 'none';
        document.getElementById('name').style.borderColor = '#6c63ff';
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById('email').value.trim();
    let emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    let errorSpan = document.getElementById('emailError');
    
    if (email === "") {
        errorSpan.innerHTML = "Email address is required";
        errorSpan.style.display = 'block';
        document.getElementById('email').style.borderColor = '#a98eff';
        return false;
    } else if (!emailRegex.test(email)) {
        errorSpan.innerHTML = "Enter valid email (name@example.com)";
        errorSpan.style.display = 'block';
        document.getElementById('email').style.borderColor = '#a98eff';
        return false;
    } else {
        errorSpan.style.display = 'none';
        document.getElementById('email').style.borderColor = '#6c63ff';
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById('phone').value.trim();
    let errorSpan = document.getElementById('phoneError');
    
    // Remove spaces for length check
    let phoneClean = phone.replace(/\s/g, '');
    
    if (phone === "") {
        errorSpan.innerHTML = "Phone number is required";
        errorSpan.style.display = 'block';
        document.getElementById('phone').style.borderColor = '#a98eff';
        return false;
    } else if (phoneClean.length < 10) {
        errorSpan.innerHTML = "Phone number must be at least 10 + digits";
        errorSpan.style.display = 'block';
        document.getElementById('phone').style.borderColor = '#a98eff';
        return false;
    } else if (phoneClean.length > 15) {
        errorSpan.innerHTML = "Phone number cannot exceed 15 digits";
        errorSpan.style.display = 'block';
        document.getElementById('phone').style.borderColor = '#a98eff';
        return false;
    } else if (!/^[0-9+\-\s()]+$/.test(phone)) {
        errorSpan.innerHTML = "Use only digits, +, -, spaces or parentheses";
        errorSpan.style.display = 'block';
        document.getElementById('phone').style.borderColor = '#a98eff';
        return false;
    } else {
        errorSpan.style.display = 'none';
        document.getElementById('phone').style.borderColor = '#6c63ff';
        return true;
    }
}

function validateSubject() {
    let subject = document.getElementById('subject').value.trim();
    let errorSpan = document.getElementById('subjectError');
    
    if (subject === "") {
        errorSpan.innerHTML = "Subject is required";
        errorSpan.style.display = 'block';
        document.getElementById('subject').style.borderColor = '#a98eff';
        return false;
    } else if (subject.length < 3) {
        errorSpan.innerHTML = "Minimum 3 characters required";
        errorSpan.style.display = 'block';
        document.getElementById('subject').style.borderColor = '#a98eff';
        return false;
    } else {
        errorSpan.style.display = 'none';
        document.getElementById('subject').style.borderColor = '#6c63ff';
        return true;
    }
}

function validateMessage() {
    let message = document.getElementById('message').value.trim();
    let errorSpan = document.getElementById('messageError');
    
    if (message === "") {
        errorSpan.innerHTML = "Message is required";
        errorSpan.style.display = 'block';
        document.getElementById('message').style.borderColor = '#a98eff';
        return false;
    } else if (message.length < 10) {
        errorSpan.innerHTML = "Minimum 10 characters required";
        errorSpan.style.display = 'block';
        document.getElementById('message').style.borderColor = '#a98eff';
        return false;
    } else {
        errorSpan.style.display = 'none';
        document.getElementById('message').style.borderColor = '#6c63ff';
        return true;
    }
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    let nameField = document.getElementById('name');
    let emailField = document.getElementById('email');
    let phoneField = document.getElementById('phone');
    let subjectField = document.getElementById('subject');
    let messageField = document.getElementById('message');
    
    if (nameField) nameField.addEventListener('input', validateName);
    if (emailField) emailField.addEventListener('input', validateEmail);
    if (phoneField) phoneField.addEventListener('input', validatePhone);
    if (subjectField) subjectField.addEventListener('input', validateSubject);
    if (messageField) messageField.addEventListener('input', validateMessage);
    
    let contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isNameValid = validateName();
            let isEmailValid = validateEmail();
            let isPhoneValid = validatePhone();
            let isSubjectValid = validateSubject();
            let isMessageValid = validateMessage();
            
            if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
                event.preventDefault();
                alert("Please check the form fields");
                return false;
            }
            
            let submitBtn = document.getElementById('submitBtn');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
            }
        });
    }
});