document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const profileIcon = document.querySelector('.profile-icon');
    const profileMenu = document.getElementById('profileMenu');
    const cardButton = document.querySelector('.card-button button');
    const cardViewerModal = document.getElementById('cardViewerModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const serviceItems = document.querySelectorAll('.service-item');
    const carouselIndicators = document.querySelectorAll('.indicator');
    const carouselContainer = document.querySelector('.card-carousel-container');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const incorporateProfileBtn = document.getElementById('incorporateProfileBtn');
    const incorporatedBanner = document.querySelector('.incorporated-profile-banner');
    const returnProfileBtn = document.querySelector('.return-profile-btn');
    const pointsBtn = document.getElementById('pointsBtn');
    const pointsModal = document.getElementById('pointsModal');
    
    // Health & Wellness Elements
    const healthWellnessModal = document.getElementById('healthWellnessModal');
    const healthDiaryModal = document.getElementById('healthDiaryModal');
    const medicationsModal = document.getElementById('medicationsModal');
    const vaccinesModal = document.getElementById('vaccinesModal');
    const labExamsModal = document.getElementById('labExamsModal');
    const healthDiaryBtn = document.getElementById('healthDiaryBtn');
    const medicationsBtn = document.getElementById('medicationsBtn');
    const vaccinesBtn = document.getElementById('vaccinesBtn');
    const labExamsBtn = document.getElementById('labExamsBtn');
    
    // Diary Form Elements
    const diaryItems = document.querySelectorAll('.diary-item');
    const diaryFormContainer = document.getElementById('diaryFormContainer');
    const diaryFormTitle = document.getElementById('diaryFormTitle');
    const pressureGroup = document.getElementById('pressureGroup');
    const glucoseGroup = document.getElementById('glucoseGroup');
    const heartRateGroup = document.getElementById('heartRateGroup');
    const imcGroup = document.getElementById('imcGroup');
    const cancelDiaryBtn = document.querySelector('.cancel-diary-btn');
    
    // Vaccine Form Elements
    const addVaccineBtn = document.querySelector('.add-vaccine-btn');
    const vaccineFormContainer = document.getElementById('vaccineFormContainer');
    const cancelVaccineBtn = document.querySelector('.cancel-vaccine-btn');
    
    // Exam Form Elements
    const addExamBtn = document.querySelector('.add-exam-btn');
    const examFormContainer = document.getElementById('examFormContainer');
    const cancelExamBtn = document.querySelector('.cancel-exam-btn');
    
    // Medication Elements
    const addMedBtn = document.querySelector('.add-med-btn');
    const newMedicationInput = document.getElementById('newMedication');
    const deleteMedBtns = document.querySelectorAll('.delete-btn');
    
    // Reimbursement Elements
    const reimbursementModal = document.getElementById('reimbursementModal');
    const forMeBtn = document.getElementById('forMeBtn');
    const forDependentBtn = document.getElementById('forDependentBtn');
    const procedureTypeModal = document.getElementById('procedureTypeModal');
    const medicalConsultBtn = document.getElementById('medicalConsultBtn');
    const medicationBtn = document.getElementById('medicationBtn');
    const reimbursementFormModal = document.getElementById('reimbursementFormModal');
    const backToReimbursementBtn = document.getElementById('backToReimbursementBtn');
    const backToProcedureBtn = document.getElementById('backToProcedureBtn');
    
    // Variables
    let currentCardIndex = 0;
    const totalCards = document.querySelectorAll('.health-card').length;
    let currentDiaryType = 'pressure';
    
    // Event Listeners
    
    // Profile Menu Toggle
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            profileMenu.classList.toggle('active');
        });
    }
    
    // Card Viewer Modal
    if (cardButton) {
        cardButton.addEventListener('click', function() {
            cardViewerModal.classList.add('active');
        });
    }
    
    // Close Modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
        });
    });
    
    // Service Items Click
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('span').textContent.trim();
            
            // Handle different services
            switch(serviceName) {
                case 'Reembolso':
                    reimbursementModal.classList.add('active');
                    break;
                case 'Sistema de Pontuação':
                    pointsModal.classList.add('active');
                    break;
                case 'Saúde e Bem-estar':
                    healthWellnessModal.classList.add('active');
                    break;
                case 'Receitas':
                    // Handle Receitas
                    break;
                default:
                    // Handle other services
                    break;
            }
        });
    });
    
    // Carousel Navigation
    if (carouselIndicators) {
        carouselIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                updateCarousel(index);
            });
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentCardIndex > 0) {
                updateCarousel(currentCardIndex - 1);
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentCardIndex < totalCards - 1) {
                updateCarousel(currentCardIndex + 1);
            }
        });
    }
    
    // Incorporate Profile
    if (incorporateProfileBtn) {
        incorporateProfileBtn.addEventListener('click', function() {
            profileMenu.classList.remove('active');
            incorporatedBanner.classList.add('active');
            document.querySelector('.greeting h1').textContent = 'Olá, Olívia';
        });
    }
    
    if (returnProfileBtn) {
        returnProfileBtn.addEventListener('click', function() {
            incorporatedBanner.classList.remove('active');
            document.querySelector('.greeting h1').textContent = 'Olá, Victor';
        });
    }
    
    // Points Button
    if (pointsBtn) {
        pointsBtn.addEventListener('click', function() {
            pointsModal.classList.add('active');
        });
    }
    
    // Health & Wellness Navigation
    if (healthDiaryBtn) {
        healthDiaryBtn.addEventListener('click', function() {
            healthWellnessModal.classList.remove('active');
            healthDiaryModal.classList.add('active');
        });
    }
    
    if (medicationsBtn) {
        medicationsBtn.addEventListener('click', function() {
            healthWellnessModal.classList.remove('active');
            medicationsModal.classList.add('active');
        });
    }
    
    if (vaccinesBtn) {
        vaccinesBtn.addEventListener('click', function() {
            healthWellnessModal.classList.remove('active');
            vaccinesModal.classList.add('active');
        });
    }
    
    if (labExamsBtn) {
        labExamsBtn.addEventListener('click', function() {
            healthWellnessModal.classList.remove('active');
            labExamsModal.classList.add('active');
        });
    }
    
    // Diary Items Click
    if (diaryItems) {
        diaryItems.forEach(item => {
            item.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                showDiaryForm(type);
            });
        });
    }
    
    // Cancel Diary Form
    if (cancelDiaryBtn) {
        cancelDiaryBtn.addEventListener('click', function() {
            diaryFormContainer.style.display = 'none';
        });
    }
    
    // Add Vaccine Button
    if (addVaccineBtn) {
        addVaccineBtn.addEventListener('click', function() {
            vaccineFormContainer.style.display = 'block';
        });
    }
    
    // Cancel Vaccine Form
    if (cancelVaccineBtn) {
        cancelVaccineBtn.addEventListener('click', function() {
            vaccineFormContainer.style.display = 'none';
        });
    }
    
    // Add Exam Button
    if (addExamBtn) {
        addExamBtn.addEventListener('click', function() {
            examFormContainer.style.display = 'block';
        });
    }
    
    // Cancel Exam Form
    if (cancelExamBtn) {
        cancelExamBtn.addEventListener('click', function() {
            examFormContainer.style.display = 'none';
        });
    }
    
    // Add Medication
    if (addMedBtn) {
        addMedBtn.addEventListener('click', function() {
            if (newMedicationInput.value.trim() !== '') {
                addMedication(newMedicationInput.value.trim());
                newMedicationInput.value = '';
            }
        });
    }
    
    // Delete Medication
    if (deleteMedBtns) {
        deleteMedBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.medication-item').remove();
            });
        });
    }
    
    // Reimbursement Flow
    if (forMeBtn) {
        forMeBtn.addEventListener('click', function() {
            reimbursementModal.classList.remove('active');
            procedureTypeModal.classList.add('active');
        });
    }
    
    if (forDependentBtn) {
        forDependentBtn.addEventListener('click', function() {
            reimbursementModal.classList.remove('active');
            procedureTypeModal.classList.add('active');
        });
    }
    
    if (medicalConsultBtn) {
        medicalConsultBtn.addEventListener('click', function() {
            procedureTypeModal.classList.remove('active');
            reimbursementFormModal.classList.add('active');
            document.getElementById('procedureTypeLabel').textContent = 'Consulta Médica';
        });
    }
    
    if (medicationBtn) {
        medicationBtn.addEventListener('click', function() {
            procedureTypeModal.classList.remove('active');
            reimbursementFormModal.classList.add('active');
            document.getElementById('procedureTypeLabel').textContent = 'Medicamento';
            
            // Show prescription alert for Fentanil
            const prescriptionAlert = document.getElementById('prescriptionAlert');
            if (prescriptionAlert) {
                prescriptionAlert.style.display = 'flex';
            }
        });
    }
    
    if (backToReimbursementBtn) {
        backToReimbursementBtn.addEventListener('click', function() {
            reimbursementFormModal.classList.remove('active');
            reimbursementModal.classList.add('active');
        });
    }
    
    if (backToProcedureBtn) {
        backToProcedureBtn.addEventListener('click', function() {
            reimbursementFormModal.classList.remove('active');
            procedureTypeModal.classList.add('active');
        });
    }
    
    // Functions
    
    // Update Carousel
    function updateCarousel(index) {
        currentCardIndex = index;
        
        // Update carousel position
        if (carouselContainer) {
            carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        }
        
        // Update indicators
        if (carouselIndicators) {
            carouselIndicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // Update prev/next buttons
        if (prevButton) {
            prevButton.style.visibility = index === 0 ? 'hidden' : 'visible';
        }
        
        if (nextButton) {
            nextButton.style.visibility = index === totalCards - 1 ? 'hidden' : 'visible';
        }
    }
    
    // Show Diary Form
    function showDiaryForm(type) {
        currentDiaryType = type;
        diaryFormContainer.style.display = 'block';
        
        // Hide all form groups
        pressureGroup.style.display = 'none';
        glucoseGroup.style.display = 'none';
        heartRateGroup.style.display = 'none';
        imcGroup.style.display = 'none';
        
        // Show the appropriate form group
        switch(type) {
            case 'pressure':
                diaryFormTitle.textContent = 'Registrar Pressão';
                pressureGroup.style.display = 'block';
                break;
            case 'glucose':
                diaryFormTitle.textContent = 'Registrar Glicose';
                glucoseGroup.style.display = 'block';
                break;
            case 'heartRate':
                diaryFormTitle.textContent = 'Registrar Frequência Cardíaca';
                heartRateGroup.style.display = 'block';
                break;
            case 'imc':
                diaryFormTitle.textContent = 'Registrar IMC';
                imcGroup.style.display = 'block';
                break;
        }
    }
    
    // Add Medication
    function addMedication(name) {
        const medicationList = document.querySelector('.medication-list');
        
        if (medicationList) {
            const newItem = document.createElement('div');
            newItem.className = 'medication-item';
            newItem.innerHTML = `
                <span>${name}</span>
                <button class="icon-button delete-btn"><i class="fas fa-trash"></i></button>
            `;
            
            medicationList.appendChild(newItem);
            
            // Add event listener to the new delete button
            const deleteBtn = newItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                newItem.remove();
            });
        }
    }
    
    // Initialize
    updateCarousel(0);
});
