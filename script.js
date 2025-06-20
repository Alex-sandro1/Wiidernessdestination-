document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('enquiry-modal');
    const openBtn = document.getElementById('open-enquiry-btn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('multi-step-form');

    const nextBtns = document.querySelectorAll('.next-btn');
    const backBtns = document.querySelectorAll('.back-btn');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-bar .step');

    let currentStep = 0;

    // --- Modal Control ---
    function openModal() { modal.style.display = 'block'; }
    function closeModal() { modal.style.display = 'none'; }
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
    
    // --- Checkbox visual toggle ---
    document.querySelectorAll('.interest-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.classList.add('checked');
            } else {
                this.parentElement.classList.remove('checked');
            }
        });
    });

    // --- Navigation Logic ---
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep++;
            updateFormSteps();
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
        });
    });

    function updateFormSteps() {
        // Hide all steps
        formSteps.forEach(step => {
            step.classList.remove('active');
        });
        // Show current step
        formSteps[currentStep].classList.add('active');
        updateProgressBar();
    }
    
    function updateProgressBar() {
        progressSteps.forEach((step, idx) => {
            if (idx <= currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    // --- Form Submission ---
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default browser submission
        
        // Here we will collect the data and send it
        const formData = new FormData(form);
        console.log("Form Submitted!");
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        
        alert("Thank you for your enquiry! We will be in touch shortly.");
        closeModal();
        // In the next step, we will replace this with code to email the data.
    });

});